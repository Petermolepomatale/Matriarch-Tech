
.PHONY: setup build up down prisma-seed

setup:
	@echo "Install frontend & backend dependencies locally (optional)"
	cd backend && npm install
	cd frontend && npm install

up:
	docker compose up --build

down:
	docker compose down

prisma-seed:
	cd backend && npx prisma db push && node prisma/seed.js
