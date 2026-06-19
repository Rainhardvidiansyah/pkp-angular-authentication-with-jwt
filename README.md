# PRODUCT APP PRAWATHIYA KARSA PRADIPTHA

Aplikasi frontend Angular untuk menampilkan data produk dan autentikasi pengguna, dibangun dengan pendekatan Clean Architecture dan pola MVVM.

## Tech Stack

- Angular 19 (Standalone Component)
- TypeScript
- HTTP Client
- Angular Router


## Fitur

- Menampilkan daftar produk
- Search produk secara realtime
- Detail produk
- Login dengan JWT
- Profile pengguna (autentikasi Bearer Token)
  
Flow autentikasi sendiri menggunakan projek pribadi saya sendiri, yang menggunakan NestJs. Adapun request dan response-nya seperti gambar di bawah ini:

![Authentication Request](src/assets/images/Authentication%20Endpoint.png)

![User Profile Endpoint](src/assets/images/User%20Profile%20Endpoint.png)
![User profile in web browser](src/assets/images/User%20Profiles%20Web%20Browser.png)
![Expired Access Token](src/assets/images/Expired%20Token.png)

## Cara Menjalankna App

Install dependencies:
```bash
npm install
```

Jalankan development server:
```bash
ng serve
```

Buka browser di `http://localhost:4200`

## API

Produk menggunakan [DummyJSON](https://dummyjson.com/products).

Auth menggunakan backend NestJS lokal di `http://localhost:3033/api/v1`. Atau, jika mau dilakukan dengan project _Backend_ Anda sendiri, maka ganti nomor port dari 3033 sesuai dengan port pengembangan yang tengah dilakukan di komputer masing-masing.

Penggantian port ini ada di file: `src/data/services/auth.service.ts`

Ganti dari:
```typescript
private baseUrl = 'http://localhost:3033/api/v1/auth';
```
Menjadi:
```typescript
private baseUrl = 'http://localhost:{port yang disesuaikan}/api/v1/auth';
```