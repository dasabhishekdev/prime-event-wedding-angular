# PrimeEventApp

PrimeEventApp is a portfolio website for an event organizer, developed by **Abhishek Das**.  
This project showcases event management capabilities and serves as a demonstration of my work.  
**All content and code are © Abhishek Das. All rights reserved.**  
This project is for portfolio and inspiration purposes only.

---

## About

PrimeEventApp is built with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.  
It demonstrates a modern, responsive web application for event and wedding planning.

---

## Getting Started

### Development server

Run the following command to start the development server:

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any source files.

### Code scaffolding

Generate a new component or other Angular elements using:

```bash
ng generate component component-name
```

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

To build the project, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```

### Running end-to-end tests

To execute end-to-end tests, run:

```bash
ng e2e
```

You may need to add a package that implements end-to-end testing capabilities.

---

## Further help

For more help on Angular CLI, use:

```bash
ng help
```

Or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Production deploy

Requires the **hosting** router on the VPS (network `web`). Push or merge to `master` → CI/CD rsyncs and runs `scripts/deploy.sh`.

| Secret | Required |
|--------|----------|
| `PROD_SSH_HOST` | Yes |
| `PROD_SSH_PRIVATE_KEY` | Yes |
| `PROD_SSH_USER` | No (default `deploy`) |
| `PROD_SSH_PASSPHRASE` | Only if key is encrypted |
| `PROD_APP_DIR` | No (default `~/prime-event-wedding-angular`) |

Local standalone: `docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build` → http://localhost:8082

---

## License

This project is for portfolio and inspiration only.  
All rights reserved by **Abhishek Das**.

Demo:

![Alt text](/ss/ss2.jpeg "Optional Title")
![Alt text](/ss/ss1.png "Optional Title")
![Alt text](/ss/ss3.png "Optional Title")
![Alt text](/ss/ss4.png "Optional Title")
