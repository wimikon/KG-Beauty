export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">KG Beauty</h3>
            <p className="text-gray-400">
              Studio de beleza especializado em procedimentos de cílios e sobrancelhas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <p className="text-gray-400 mb-2">📞 (41) 99999-9999</p>
            <p className="text-gray-400">📧 contato@kgbeauty.com.br</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Horários</h4>
            <p className="text-gray-400 mb-1">Seg-Sex: 9h às 18h</p>
            <p className="text-gray-400">Sab: 9h às 14h</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 KG Beauty. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
