import { useState } from 'react'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleGoogleLogin = () => {
    // TODO: Implementar login com Google OAuth
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-secondary mb-6 text-center">Painel Admin</h1>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition flex items-center justify-center space-x-2"
        >
          <span>Login com Google</span>
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-secondary mb-8">Painel Administrativo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-secondary mb-4">Agendamentos Pendentes</h2>
          <p className="text-gray-600">Nenhum agendamento pendente</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-secondary mb-4">Procedimentos</h2>
          <p className="text-gray-600">Nenhum procedimento cadastrado</p>
        </div>
      </div>

      <button
        onClick={() => setIsLoggedIn(false)}
        className="mt-8 bg-red-600 text-white px-6 py-2 rounded font-bold hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  )
}
