# Repository Summary

Smart Invoice Platform is an enterprise invoice and payment management system.

The platform allows businesses to:
- create invoices
- manage payments
- send reminders
- generate reports
- track failed transactions

Main modules:
- Authentication
- Invoice Management
- Payment Processing
- Notification Service
- Reporting
- Audit Logging

Tech Stack:
- Backend: FastAPI
- Frontend: React + TypeScript
- Database: PostgreSQL
- Queueing: Redis + Celery

Authentication:
- JWT authentication
- Role-based authorization

Infrastructure:
- Dockerized services
- CI/CD via GitHub Actions

Security Features:
- audit logging
- encrypted secrets
- API rate limiting