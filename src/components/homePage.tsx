"use client";

import Image from "next/image";

import { Heart, Lightbulb, Users, Phone, Mail, Calendar } from "lucide-react";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Card, CardContent } from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
	const { setTheme } = useTheme();

	const [play, setPlay] = useState(true);

	const plugin = React.useRef<any>(null);

	const [pluginReady, setPluginReady] = useState(false);

	// inicialize the plugin, tu tylko inicjalizacja
	useEffect(() => {
		// bedzie mial wszystkie metody play stop etc
		plugin.current = Autoplay({ delay: 2000, stopOnInteraction: false });

		// HERE WE ARE CHANGING THE STATE OF SOMETHING SO THE PLUGIN IN CAROUSEL WILL BE LOADED
		// POWODUJE, ZE CAROUSEL OTRZYMAL PLUGINS W PROPSACH, WYMUSZA REENDER I NIE MA SYTUACJI JUZ ZE PLUGINS BEDZIE MIAL PUSTA TABLICE!
		// W PIERWSZYM REENDERZE DOSTAJE PUSTE PROPSY ALE JAKO ZE PO PODLACZENIU ROBIMY OD RAZU DRUGI REENDER TO POTEM DOSTANIE JUZ CURRENT!

		/*
		React wywołuje funkcję komponentu (render).

		Tworzy Virtual DOM.

		Renderuje/maluje w przeglądarce.

		Dopiero teraz odpalają się wszystkie useEffect w kolejności, w jakiej były zapisane.

		To dlatego inicjalizacja w useRef(...) od razu działa — bo plugin istnieje już w kroku 1, a nie w kroku 4.


		SHORTCUT
		Krótkie streszczenie w 9 punktach (super-skrót)

		Pierwszy render: plugin.current = null, Carousel dostaje plugins=[].

		Commit + paint.

		useEffect([]) inicjalizuje plugin (plugin.current = Autoplay(...)) i wywołuje setPluginReady(true).

		React robi drugi render — tym razem plugins = [plugin.current].

		Commit drugiego renderu.

		Carousel w swoim lifecycle attachuje plugin → plugin.current.internalEngine ustawione.

		Twój useEffect([play, pluginReady]) uruchamia .play() / .stop() — jeśli engine podpięty, działa natychmiast; jeśli nie, zależy od implementacji pluginu (zwykle no-op).

		Kliki użytkownika zmieniają play → efekt ponownie wywołuje .play()/.stop().

		Unmount → cleanup zatrzymuje plugin i usuwa referencję.
		*/
		setPluginReady(true);

		// czyszczenie, chroni przed wyciekami, usuwamy referencje etc
		// nastepuje gdy wykonuje sie unmount czyli moment gdy react usuwa komponent z drzewa.
		// gdy zwracamy funckje w useEffect to zawsze jest to cleanup! react zawsze tak traktuje funkcje
		return () => {
			plugin.current?.stop?.();
			plugin.current = null;
		};
	}, []);

	// hook ktory steruje autoplayem
	useEffect(() => {
		// chociaz to troche bez sensu bo i tak isntieje
		if (!pluginReady || !plugin.current) return;

		try {
			// plugin bezpiecznie podlacozny mozna wywolac play
			// if (plugin.current.internalEngine) {
			// jesli play jest true no to niech sobie chodzi
			if (play === true) {
				plugin.current.play();
			} else {
				// jesli zmienilismy play na false no to ma sie zatrzymac
				plugin.current.stop();
			}
			//}
		} catch (e) {}
	}, [play, pluginReady]);

	return (
		<div>
			<main className="min-h-screen w-full">
				{/* HERO */}
				<section
					className="relative h-[70vh] w-full flex items-center justify-center bg-cover bg-center"
					style={{ backgroundImage: "url('/ai-generated-9603565_1920.jpg')" }}>
					<div className="absolute inset-0 bg-black/40"></div>
					<div className="relative z-10 text-center text-white max-w-3xl px-4">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Psychoterapia dla dorosłych i młodzieży
						</h1>
						<p className="text-lg md:text-xl mb-8">
							Pomoc w trudnych sytuacjach życiowych, kryzysach i rozwoju
							osobistym.
						</p>
						<a
							href="#contact"
							className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">
							Umów wizytę
						</a>
					</div>
				</section>

				{/* O mnie */}
				<section className="py-16 px-6 bg-white">
					<div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
						<div className="w-full md:w-1/2 mb-8 md:mb-0">
							<Image
								src="/anna.png"
								alt="mgr Anna Babicz"
								width={400}
								height={400}
								className=" object-cover rounded-xl"
							/>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">O mnie</h2>
							<p className="text-gray-700 leading-relaxed mb-6">
								Nazywam się <strong>mgr Anna Babicz</strong> i od wielu lat
								wspieram osoby dorosłe oraz młodzież w przezwyciężaniu trudności
								życiowych. Psychoterapia to dla mnie nie tylko zawód, ale przede
								wszystkim pasja – wierzę, że każdy z nas ma w sobie siłę do
								zmiany.
							</p>
							<p className="text-gray-700 leading-relaxed">
								Zapraszam do wspólnej pracy nad odzyskaniem równowagi,
								zrozumieniem siebie i znalezieniem nowych perspektyw.
							</p>
						</div>
					</div>
				</section>

				{/* Obszary pomocy */}
				<section className="py-16 px-6  ">
					<div className="max-w-6xl mx-auto text-center">
						<h2 className="text-3xl dark:text-white font-bold text-gray-900 mb-12">
							W czym mogę pomóc?
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									icon: Heart,
									title: "Kryzysy emocjonalne",
									desc: "Wsparcie w radzeniu sobie z lękiem, depresją i trudnymi emocjami.",
								},
								{
									icon: Users,
									title: "Relacje i rodzina",
									desc: "Pomoc w trudnościach w związku, rodzinie i kontaktach społecznych.",
								},
								{
									icon: Lightbulb,
									title: "Rozwój osobisty",
									desc: "Odnalezienie własnych zasobów i budowanie poczucia sprawczości.",
								},
							].map(({ icon: Icon, title, desc }, i) => (
								<div
									key={i}
									className="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition">
									<Icon className="h-10 w-10 text-blue-600 mb-4" />
									<h3 className="text-xl font-semibold text-gray-800 mb-3">
										{title}
									</h3>
									<p className="text-gray-600">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section
					id="contact"
					className="flex flex-col justify-center items-center  py-20 bg-gradient-to-r from-blue-900 to-indigo-600 text-white text-center">
					<div className=" flex flex-col justify-center items-center max-w-3xl mx-auto px-6">
						<h2 className="text-3xl font-bold mb-6">Zrób pierwszy krok</h2>
						<p className="text-lg mb-8">
							Jeśli czujesz, że psychoterapia może być dla Ciebie pomocą –
							zapraszam do kontaktu i umówienia pierwszego spotkania.
						</p>

						<Carousel
							 className="w-[280px] sm:w-full sm:max-w-xs"
							// when we connect the plugins to our Ref, the Carousel starts spinning
							// plugins to tablica instancji pluginow
							plugins={pluginReady ? [plugin.current] : []}
							onClick={() => {
								if (play === true) {
									setPlay(false);
								} else {
									setPlay(true);
								}
							}}
							//onMouseLeave={() => plugin.current.play()}
						>
							<CarouselContent>
								{Array.from({ length: 5 }).map((_, index) => (
									<CarouselItem key={index}>
										<div className="p-1">
											<Card>
												<CardContent className="flex aspect-square items-center justify-center p-6">
													<span className="text-4xl font-semibold">
														{"zdjecie/opinia" + (index + 1)}
													</span>
												</CardContent>
											</Card>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
						<a
							href="mailto:kontakt@psychoterapeuta.pl"
							className="bg-white text-blue-900 px-8 mt-5 py-3 rounded-full font-medium hover:bg-gray-100 transition">
							Skontaktuj się
						</a>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="bg-gray-800 text-white py-8 px-6">
				<div className="max-w-4xl mx-auto">
					<h2
						id="contact-heading"
						className="text-2xl font-bold text-center text-stone-50 mb-6 dark:text-white mb-8">
						Skontaktuj się ze mną
					</h2>

					<div className="grid md:grid-cols-3 gap-6">
						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
							<Phone
								className="h-10 w-10 text-blue-900 mx-auto mb-4"
								aria-hidden="true"
							/>
							<h3 className="font-semibold text-gray-800 mb-2">Telefon</h3>
							<a
								href="tel:+48123456789"
								className="text-gray-600 hover:text-blue-900 transition-colors">
								+48 123 456 789
							</a>
						</div>

						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
							<Mail
								className="h-10 w-10 text-blue-900 mx-auto mb-4"
								aria-hidden="true"
							/>
							<h3 className="font-semibold text-gray-800 mb-2">Email</h3>
							<a
								href="mailto:kontakt@psychoterapeuta.pl"
								className="text-gray-600 hover:text-blue-600 transition-colors">
								kontakt@psychoterapeuta.pl
							</a>
						</div>

						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
							<Calendar
								className="h-10 w-10 text-blue-900 mx-auto mb-4"
								aria-hidden="true"
							/>
							<h3 className="font-semibold text-gray-800 mb-2">Umów wizytę</h3>
							<button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
								Kontakt
							</button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
