export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
          Bem-vindo à <span className="text-primary">KG Beauty</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Seu studio de beleza especializado em procedimentos de cílios e sobrancelhas
        </p>
        <button className="bg-primary text-secondary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
          Agendar Agora
        </button>
      </section>

      {/* About Section */}
      <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-secondary mb-4">Sobre Nós</h2>
        <p className="text-gray-600 mb-4">
          A KG Beauty é um studio de beleza dedicado a oferecer os melhores procedimentos em cílios e sobrancelhas.
          Com profissionais experientes e produtos de qualidade, garantimos resultados incríveis.
        </p>
        <p className="text-gray-600">
          Nosso objetivo é fazer você se sentir bonita e confiante em cada procedimento realizado.
        </p>
      </section>

      {/* Services Preview */}
      <section id="procedimentos" className="mb-16">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Nossos Procedimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="w-full h-40 bg-gradient-to-br from-primary to-accent rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-secondary mb-2">Procedimento {item}</h3>
              <p className="text-gray-600 mb-4">Descrição do procedimento</p>
              <button className="w-full bg-primary text-secondary py-2 rounded font-bold hover:bg-opacity-90 transition">
                Agendar
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
