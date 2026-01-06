// Nomor 3
// Menggunakan operator ternary

function LoginStatus({ isLoggedIn }) {
  return (
    <h3>
      {isLoggedIn ? 'Selamat datang kembali 👋' : 'Silakan login dulu 🔐'}
    </h3>
  );
}

export default LoginStatus