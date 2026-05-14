# Architecture

The platform follows a layered service-oriented architecture.

Layers:
1. API Layer
2. Service Layer
3. Repository Layer
4. Background Worker Layer

## Authentication

Authentication uses JWT access tokens.

Authorization uses role-based access control (RBAC).

Roles:
- ADMIN
- ACCOUNTANT
- VIEWER

## Invoice Module

Responsible for:
- invoice creation
- invoice updates
- tax calculations
- payment status tracking

## Payment Module

Integrates with Stripe.

Features:
- payment retries
- idempotency keys
- transaction history

Retry Handling:
- failed payments retried 3 times
- exponential backoff
- dead-letter queue for permanent failures

## Notification Service

Handles:
- email reminders
- invoice notifications
- payment alerts

Uses Celery background workers.

## Audit Logging

All sensitive operations are audit logged:
- payment updates
- invoice deletion
- role changes
- login failures

## Reporting

Reporting module generates:
- payment reports
- tax reports
- invoice aging reports