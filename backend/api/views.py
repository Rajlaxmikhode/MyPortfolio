import json
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import re
from django.conf import settings
from django.core.mail import EmailMessage

PROJECTS = [
    {
        'id': 'insightboard',
        'title': 'InsightBoard',
        'category': 'Full Stack',
        'summary': 'A decision workspace that turns raw metrics into crisp, shareable moments.',
        'tech': ['React', 'Java', 'SQL'],
        'featured': True,
    },
    {
        'id': 'careconnect',
        'title': 'CareConnect',
        'category': 'AI/ML',
        'summary': 'A triage experience that guides people quickly toward the right next step.',
        'tech': ['Python', 'FastAPI', 'AI/ML'],
        'featured': True,
    },
    {
        'id': 'supplyflow',
        'title': 'SupplyFlow',
        'category': 'Backend',
        'summary': 'Inventory planning and ordering for fast-moving retail teams.',
        'tech': ['Java', 'Docker', 'SQL'],
        'featured': True,
    },
]


def project_list(request):
    return JsonResponse({'projects': PROJECTS})


@csrf_exempt
def admin_login(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method.'}, status=405)

    try:
        data = json.loads(request.body.decode('utf-8'))
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON.'}, status=400)

    username = data.get('username')
    password = data.get('password')
    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return JsonResponse({'status': 'ok', 'message': 'Logged in successfully.'})

    return JsonResponse({'status': 'error', 'message': 'Invalid credentials.'}, status=401)


@csrf_exempt
def admin_logout(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method.'}, status=405)

    logout(request)
    return JsonResponse({'status': 'ok', 'message': 'Logged out successfully.'})


def admin_status(request):
    return JsonResponse({'authenticated': request.user.is_authenticated})


EMAIL_RE = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')

@csrf_exempt
def contact(request):
    if request.method != 'POST':
        return JsonResponse({'status': 'error', 'message': 'Invalid request method.'}, status=405)
    try:
        data = json.loads(request.body.decode('utf-8'))
    except json.JSONDecodeError:
        return JsonResponse({'status': 'error', 'message': 'Invalid JSON.'}, status=400)

    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').strip()
    message = (data.get('message') or '').strip()

    if not name or not email or not message:
        return JsonResponse({'status': 'error', 'message': 'Please fill in name, email, and message.'}, status=400)
    if not EMAIL_RE.match(email):
        return JsonResponse({'status': 'error', 'message': 'Please enter a valid email address.'}, status=400)

    try:
        EmailMessage(
            subject=f'Portfolio contact form: {name}',
            body=f'Name: {name}\nEmail: {email}\n\n{message}',
            from_email=settings.DEFAULT_FROM_EMAIL or None,
            to=[settings.CONTACT_RECEIVER_EMAIL],
            reply_to=[email],
        ).send(fail_silently=False)
    except Exception:
        return JsonResponse({'status': 'error', 'message': 'Could not send your message right now.'}, status=502)

    return JsonResponse({'status': 'ok', 'message': 'Message sent.'})