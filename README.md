# RateFlix - A safehome for Movie buffs
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
![GitHub](https://img.shields.io/github/license/mazdakdev/RateFlix)
![GitHub stars](https://img.shields.io/github/stars/mazdakdev/RateFlix)
![GitHub watchers](https://img.shields.io/github/watchers/mazdakdev/RateFlix)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/mazdakdev/RateFlix)
<!-- ALL-CONTRIBUTORS-BADGE:END -->


<img width="1440" alt="Screenshot 2023-11-09 at 6 19 03 PM-min" src="https://github.com/mazdakdev/RateFlix/assets/60855141/7a4bf55a-c5a4-4366-a1b8-aa7dfef50132">

This full stack application allows users to browse movies, write reviews, and receive personalized recommendations. It utilizes Neural Collaborative Filtering (NCF) for recommendations and LSTM neural networks for sentiment analysis of the provided comment in the scale of 0 to 5.

## Architecture
TODO

## Team and Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Mah6od"><img src="https://avatars.githubusercontent.com/u/117342306?v=4?s=100" width="100px;" alt="Mahbod"/><br /><sub><b>Mahbod</b></sub></a><br /><a href="#design-Mah6od" title="Design">🎨</a> <a href="https://github.com/mazdakdev/RateFlix/commits?author=Mah6od" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/salehtalebi24"><img src="https://avatars.githubusercontent.com/u/139631477?v=4?s=100" width="100px;" alt="salehtalebi24"/><br /><sub><b>salehtalebi24</b></sub></a><br /><a href="#ideas-salehtalebi24" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://alirezaarabi.com"><img src="https://avatars.githubusercontent.com/u/45128978?v=4?s=100" width="100px;" alt="Alirezaarabi"/><br /><sub><b>Alirezaarabi</b></sub></a><br /><a href="https://github.com/mazdakdev/RateFlix/commits?author=Alirezaaraby" title="Code">💻</a> <a href="#ideas-Alirezaaraby" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://mazdak.dev"><img src="https://avatars.githubusercontent.com/u/60855141?v=4?s=100" width="100px;" alt="Mazdak Pakaghideh"/><br /><sub><b>Mazdak Pakaghideh</b></sub></a><br /><a href="https://github.com/mazdakdev/RateFlix/commits?author=mazdakdev" title="Code">💻</a> <a href="#ideas-mazdakdev" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/mazdakdev/RateFlix/commits?author=mazdakdev" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Technologies
**The Recommender System / Sentiment Analysis:**
- Python - High-level Progeamming Language
- Pandas - Python Data Analysis Library
- Numpy  - Python High-level Mathematical Functions
- NTLK   - Python Natural Language Toolkit
- scikit-learn - Python Machine Learning Library
- Pytorch - Python Neural Networks and Deep Learning Library

**Datasets**
TODO

**Frontend:**
- Vue3 - The Progressive JavaScript Framework
- Nuxt3 - The Intuitive Vue Framework · Nuxt
- Pinia - State Management Framework For Vue.js.
- Tailwind.css - Open Source CSS Framework
- [OMDb API](https://www.omdbapi.com/)
- HTML/CSS

**Backend:** 
- Python - High-level Programming Language
- Django -  High-level Python web framework
- DRF - Django REST framework
- JWT Auth and ...

## Development

### Clone The Repo
  ```bash
  user@host:~/$ git clone https://github.com/mazdakdev/RateFlix && cd Rateflix
  ```

### Create `.env` file in `core/`
   ```
    SECRET_KEY=your-django-secret-key
    DEBUG=True
    CORS_ALLOW_ALL_ORIGINS=True
   ```
   
   Note: you can get Django secret key from [here](https://djecrety.ir/).
   
### Start Backend Development Server
   ```bash
   user@host:~/$ cd core && poetry install && poetry run python manage.py runserver
   ```

### Start Fronted Development Server
  ```bash
  user@host:~/$ cd rate-flix && npm install && npm run dev
  ```

## Deployment


  ### Getting Started with Docker
  TODO
  1. Clone repo


## Deploy manualy


## Contributions
  This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!









<a href="https://uupload.ir/view/screen_r6bg.png" target="_blank"><img src="https://s6.uupload.ir/files/screen_r6bg_thumb.png" border="0" alt="آپلود عکس" /></a>

# Miz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
