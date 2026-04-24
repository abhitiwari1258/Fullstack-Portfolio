React-hot-toast is a lightweight and highly customizable notification library for React applications.

npm install react-hot-toast
npm install sweetalert2

---------------------------
What jwt.sign() actually does

jwt.sign() does not just “convert email + secret into a token”.
It:

Takes a payload (e.g., { email })
Uses a secret key (JWT_SECRET)
Optionally adds metadata (like expiration)
creates a digitally signed token