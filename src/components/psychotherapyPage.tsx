"use client";

import { Heart, CheckCircle, AlertCircle, Users, MessageCircle, Calendar } from "lucide-react";

export default function PsychoterapiaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Psychoterapia jako forma pomocy
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
      </section>

      {/* O psychoterapii Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <MessageCircle className="h-8 w-8 text-blue-600 mr-3" />
              O psychoterapii
            </h2>
            
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Psychoterapia to forma profesjonalnej pomocy osobom cierpiącym z powodu różnego rodzaju trudności 
                natury psychicznej i problemów osobistych. Ma na celu zmobilizować do zmiany tego co sprawia cierpienie 
                i wpływa na jakość życia, wzmocnić, pomóc w odnalezieniu spokoju i radości w swoim życiu.
              </p>
              
              <p>
                Polega na rozmowie, podczas której klient ujawnia swoje doświadczenia, uczucia a także swoje cele 
                i oczekiwania, co do terapii. Terapeuta ze swojej strony informuje o sposobie pracy i przebiegu sesji 
                terapeutycznych a także dzieli się swoim rozumieniem wewnętrznego świata klienta, wspiera i towarzyszy.
              </p>
              
              <p>
                Na sesji klient dzieli się z terapeutą swoim doświadczeniem, trudnościami z życia osobistego. 
                Pomiędzy terapeutą a klientem jest zawierany kontrakt terapeutyczny, który zawiera cele 
                i oczekiwania klienta, a także częstotliwość spotkań.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Warunki psychoterapii Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
              Warunki psychoterapii
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Po stronie klienta pozostaje decyzja o podjęciu terapii, która wiąże się dodatkowo z zaakceptowaniem takich warunków jak:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "regularności spotkań",
                "zaangażowania i aktywnego udziału poprzez mówienie o swoich uczuciach, myślach, fantazjach",
                "brania odpowiedzialności za siebie",
                "przestrzegania zasad odwoływania sesji oraz kończenia sesji terapeutycznej",
                "odpłatności za psychoterapię"
              ].map((warunek, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{warunek}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kiedy warto podjąć terapię Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <AlertCircle className="h-8 w-8 text-amber-600 mr-3" />
              Kiedy warto podjąć psychoterapię?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Wskazaniem do podjęcia psychoterapii może być między innymi:
            </p>
            
            <div className="grid md:grid-cols-1 gap-3">
              {[
                "cierpienie wywołane lękiem",
                "stany depresyjne",
                "zaburzenia nerwicowe",
                "schizofrenia",
                "zaburzenia jedzenia (anoreksja, bulimia, ortoreksja)",
                "sytuacje kryzysowe (żałoba, choroba własna lub osoby bliskiej, rozpad związku, strata dziecka, współmałżonka, osoby bliskiej)",
                "niska samoocena (brak wiary w swoją skuteczność, brak sprawczości swojej osoby)",
                "trudności w związku",
                "doświadczanie przemocy (fizycznej, psychicznej, strukturalnej)",
                "problemy w kontaktach społecznych i rodzinnych",
                "trudności wynikające z wejścia w nowy etap życia (dorastanie, małżeństwo, nowy związek, rodzicielstwo)",
                "zaburzenia zachowania (agresja fizyczna, kradzieże, etc.)",
                "depresja młodzieńcza i obniżony nastrój, zaburzenia snu, łaknienia, myśli samobójcze",
                "depresja poporodowa"
              ].map((wskazanie, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{wskazanie}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dodatkowa pomoc Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-green-200/50">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              Psychoterapia służy pomocą także:
            </h2>
            
            <div className="space-y-4">
              {[
                "rodzicom i opiekunom doświadczającym problemów wychowawczych",
                "osobom uzależnionym od alkoholu, substancji psychoaktywnych, hazardu",
                "osobom współuzależnionym, DDA (Dorosłym Dzieciom Alkoholików)"
              ].map((grupa, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl">
                  <Users className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{grupa}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-6 bg-slate-100/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Masz wątpliwości?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Jeżeli są Państwo niepewni lub mają Państwo wątpliwości czy psychoterapia jest odpowiednim 
              rozwiązaniem w Państwa sytuacji, zachęcam do kontaktu.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Skontaktuj się
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}