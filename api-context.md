# API Context

## Authentication APIs

POST /auth/login
POST /auth/logout
POST /auth/refresh

## Invoice APIs

POST /invoices
GET /invoices/{id}
PUT /invoices/{id}

## Payment APIs

POST /payments/process
GET /payments/history

## Reporting APIs

GET /reports/monthly
GET /reports/tax

## Notification APIs

POST /notifications/email