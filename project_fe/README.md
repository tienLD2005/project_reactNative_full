# 🏨 Live Green - Hotel Booking App

Modern React Native hotel booking application with complete authentication flow.

## ✨ Features

- 🎨 **Beautiful UI/UX** - Modern gradient designs, smooth animations
- 🔐 **Complete Auth Flow** - Register, Login, OTP Verification, Forgot Password
- 📧 **Email OTP Verification** - Secure account activation
- 🔒 **JWT Authentication** - Token-based security
- 📱 **Onboarding** - First-time user experience
- 💾 **Persistent Login** - Auto-login with saved tokens
- 🌐 **Spring Boot Backend** - RESTful API integration

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Expo CLI
- iOS Simulator / Android Emulator / Expo Go app

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Start with cache clear (if needed)
npm start -- --clear
```

### Configuration

Update backend API URL:
```typescript
// utils/axiosInstance.ts
const BASE_URL = 'http://YOUR_IP:8080/api/v1';
```

## 📱 Screens

### Authentication Flow
1. **Splash Screen** - App loading (2.5s)
2. **Onboarding** - Introduction carousel (first-time only)
3. **Login** - Email/password authentication
4. **Register** - Create new account with full profile
5. **Verify OTP** - 6-digit email verification
6. **Forgot Password** - Password recovery

### Main App
- **Home** - Dashboard with user info
- **Explore** - Hotel browsing (placeholder)
- **More screens** - (To be implemented)

## 🏗️ Project Structure

```
project_fe/
├── app/
│   ├── (auth)/              # Authentication screens
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   ├── verify-otp.tsx
│   │   └── forgot-password.tsx
│   ├── (tabs)/              # Main app screens
│   │   ├── index.tsx        # Home
│   │   └── explore.tsx
│   ├── splash.tsx
│   ├── onboarding.tsx
│   └── _layout.tsx
├── apis/                    # API service layer
│   ├── auth.api.ts
│   └── index.ts
├── utils/
│   ├── axiosInstance.ts     # Axios configuration
│   └── storage.ts           # AsyncStorage helpers
└── components/              # Reusable components
```

## 🔑 Key Technologies

- **React Native** - Mobile framework
- **Expo** - Development platform
- **Expo Router** - File-based navigation
- **Axios** - HTTP client
- **AsyncStorage** - Local storage
- **TypeScript** - Type safety
- **Expo Linear Gradient** - UI styling
- **DateTimePicker** - Date selection

## 🧪 Testing

See detailed testing guide:
```bash
# Read testing documentation
cat HOW_TO_TEST.md
```

**Quick Test:**
1. Register with real email
2. Check email for OTP
3. Verify OTP (6 digits)
4. Login successfully

## 📚 Documentation

- `README.md` - This file (overview)
- `HOW_TO_TEST.md` - Complete testing guide (13 test cases)
- `VERIFY_OTP_FLOW.md` - OTP verification flow details
- `OTP_VERIFICATION_SUMMARY.md` - Implementation summary (in parent folder)

## 🔧 Common Commands

```bash
# Start dev server
npm start

# Clear cache and restart
npm start -- --clear

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Type check
npm run type-check

# Build for production
npm run build
```

## 🐛 Troubleshooting

### "Network Error"
- Check backend is running: `http://YOUR_IP:8080`
- Update IP in `utils/axiosInstance.ts`
- Check firewall settings

### "Metro bundler cache error"
```bash
npm start -- --clear
# or
rm -rf node_modules/.cache .expo
npm start
```

### "Email not sending"
- Check backend email config in `application.properties`
- Use Gmail App Password (not regular password)
- Check spam folder

## 📱 Backend Integration

This frontend connects to Spring Boot backend:
```
Location: ../project_be/
API Base: http://YOUR_IP:8080/api/v1
```

**API Endpoints:**
- `POST /auth/register` - Create account + Send OTP
- `POST /auth/verify-otp` - Verify email with OTP
- `POST /auth/login` - Login with credentials
- `POST /auth/forgot-password` - Send password reset OTP
- `POST /auth/reset-password` - Reset password

## 🎯 Authentication Flow

```
Register → Email OTP → Verify OTP → Login → Home
           ↑                            ↓
           └──────── Not Verified ──────┘
```

**Key Points:**
- ✅ Account created with `isVerified: false`
- ✅ OTP sent to email (6 digits, 10min expiry)
- ✅ Must verify before login
- ✅ Login rejected if not verified
- ✅ JWT token saved in AsyncStorage
- ✅ Auto-login on app restart

## 🚀 Production Deployment

See deployment checklist:
```bash
# Build standalone app
eas build --platform ios
eas build --platform android

# Or classic build
expo build:ios
expo build:android
```

## 📄 License

Private project for learning purposes.

## 👨‍💻 Developer

Built with ❤️ by Tien Le

---

## 🎉 Ready to Run!

```bash
npm install
npm start
```

Scan QR code in **Expo Go** app and enjoy! 🚀
