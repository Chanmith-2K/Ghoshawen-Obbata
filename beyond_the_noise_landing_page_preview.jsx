import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, MessageCircle, ShieldCheck, Smartphone, Sparkles, CheckCircle2, Download, Star, Quote, Lock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BeyondTheNoiseLandingPage() {
  const coverUrl = "/book-cover.png";
  const samplePdfUrl = "/beyond-the-noise-sample.pdf";
  const whatsappNumber = "94776473330";
  const whatsappMessage = encodeURIComponent("Hi, I want to know more about Beyond the Noise book. Please send me the details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const chapters = [
    "01. ඝෝෂාකාරී යුගය",
    "02. බිඳී ගිය අවධානය",
    "03. ඩිජිටල් ඇබ්බැහිය",
    "04. සමාජ මාධ්‍ය ජීවිතය",
    "05. මිනිස් සබඳතා සහ තනිකම",
    "06. කෘත්‍රිම මායාවන් සහ සැබෑ ජීවිතය",
    "07. මනස නැවත ගොඩනැගීම",
    "08. නිහඬතාවය සොයා යන ගමන",
    "09. සැබෑ සැනසීම",
    "10. නව මිනිසා",
  ];

  const benefits = [
    "Phone එකෙන් දවස පටන් ගන්නකොට අවධානය සොරාගන්න විදිහ තේරුම් ගන්න.",
    "Short videos, dopamine loop, social media comparison මනසට කරන බලපෑම හඳුනාගන්න.",
    "නොනවතින සිතුවිලි, හිස්කම, mental tiredness අතරින් inner silence එක සොයාගන්න.",
    "Motivation වලට වඩා ගැඹුරු self-awareness එකක් ගොඩනගන්න.",
  ];

  const faqs = [
    ["මේක printed book එකක්ද?", "නැහැ. මෙය Digital PDF book එකක්."],
    ["Payment කළාට පස්සේ ලැබෙන්නේ කොහොමද?", "Payment confirmation එකෙන් පසු WhatsApp හෝ Email හරහා PDF එක ලබා දෙනවා."],
    ["Phone එකෙන් කියවන්න පුළුවන්ද?", "ඔව්. Mobile, tablet, laptop, computer හැම එකකින්ම කියවන්න පුළුවන්."],
    ["මේක motivation book එකක්ද?", "නැහැ. මෙය digital noise, attention, mental exhaustion සහ inner silence ගැන ලියවුණු deeper psychology-spiritual book එකක්."],
    ["Sample එක free ද?", "ඔව්. Sample pages කිහිපයක් free download කරගන්න පුළුවන්. Full book එක Rs. 600."],
  ];

  const reviews = [
    {
      name: "A reader from Colombo",
      role: "University Student",
      review: "මම මේක කියවන්න පටන් ගත්තේ simple ebook එකක් කියලා. ඒත් පළවෙනි chapter එකෙන්ම මට දැනුණා මේක මගේ daily life එක ගැනම ලියලා තියෙනවා වගේ. Phone එක අතට ගත්තම වෙලාව යන හැටි, අනුන්ගේ ජීවිත එක්ක මාව compare වෙන හැටි — ඒ දේවල් මට හරි honest විදිහට face කරන්න වුණා.",
    },
    {
      name: "Young creator",
      role: "Content Creator",
      review: "Social media වලින්ම වැඩ කරන කෙනෙක් විදිහට මට මේ පොත ගොඩක් වැදුණා. අපි content create කරන අතරේ අපිම digital noise එකේ හිරවෙනවා කියන එක මට තේරුණා. මේක preach කරන පොතක් නෙවෙයි, හෙමින් හෙමින් ඇතුළට බලන්න දෙන පොතක්.",
    },
    {
      name: "A working reader",
      role: "Private Sector Employee",
      review: "මට හැමදාම මහන්සියි කියලා හිතුණා. හැබැයි මේ පොත කියවද්දී මට තේරුණේ මගේ ඇඟට වඩා මගේ මනස මහන්සි වෙලා තිබුණා කියලා. විශේෂයෙන් attention, comparison, loneliness ගැන තියෙන parts මට ගොඩක් real වගේ දැනුණා.",
    },
  ];

  const samplePages = [
    "Page 01 — Book opening and dedication",
    "Page 02 — Introduction to the noisy mind",
    "Page 03 — The Age of Noise preview",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_10%,rgba(56,189,248,.28),transparent_35%),radial-gradient(circle_at_75%_20%,rgba(250,204,21,.12),transparent_25%),linear-gradient(180deg,#07111f_0%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 md:grid-cols-2 md:px-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Brain className="h-4 w-4" /> Powered by Brain Vibration
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              ඝෝෂාවෙන් ඔබ්බට
              <span className="mt-3 block text-2xl font-medium tracking-[0.35em] text-cyan-100 md:text-3xl">BEYOND THE NOISE</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              නූතන මිනිසාගේ digital noise, broken attention, social media comparison, mental exhaustion සහ inner silence ගැන ලියවුණු Sinhala spiritual-psychology book එකක්.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <Button className="rounded-2xl bg-white px-6 py-6 text-base font-semibold text-slate-950 hover:bg-cyan-100">
                  Buy Now — Rs. 600
                </Button>
              </a>
              <a href={samplePdfUrl} download>
                <Button variant="outline" className="rounded-2xl border-white/25 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">
                  <BookOpen className="mr-2 h-5 w-5" /> Download Sample
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-200" /> Digital PDF</span>
              <span className="inline-flex items-center gap-2"><Smartphone className="h-4 w-4 text-cyan-200" /> Mobile Friendly</span>
              <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-cyan-200" /> WhatsApp Delivery</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 flex justify-center md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-300/20 blur-3xl" />
              <img
                src={coverUrl}
                alt="Beyond the Noise book cover"
                className="relative w-[310px] rounded-3xl border border-white/10 shadow-2xl md:w-[420px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-3xl border-white/10 bg-white/[0.04] text-white shadow-xl">
            <CardContent className="p-7">
              <Sparkles className="mb-4 h-8 w-8 text-cyan-200" />
              <h3 className="text-xl font-semibold">Not just motivation</h3>
              <p className="mt-3 leading-7 text-slate-300">මෙය තවත් දුවන්න කියන පොතක් නොවෙයි. මෙය මොහොතකට නතර වෙලා ඔබේම මනස අහන්න කරන ආරාධනාවක්.</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/10 bg-white/[0.04] text-white shadow-xl">
            <CardContent className="p-7">
              <Brain className="mb-4 h-8 w-8 text-cyan-200" />
              <h3 className="text-xl font-semibold">For the tired mind</h3>
              <p className="mt-3 leading-7 text-slate-300">Notifications, short videos, comparison, pressure, loneliness — මේ මනස ඇතුළේ හැදෙන ඝෝෂාව හඳුනාගන්න.</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/10 bg-white/[0.04] text-white shadow-xl">
            <CardContent className="p-7">
              <BookOpen className="mb-4 h-8 w-8 text-cyan-200" />
              <h3 className="text-xl font-semibold">Simple but deep</h3>
              <p className="mt-3 leading-7 text-slate-300">Spiritual psychology, neuroscience-inspired ideas සහ real-life examples එකට ගෙනෙන සරල කියවීමක්.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Overview</p>
            <h2 className="text-3xl font-semibold md:text-4xl">About this book</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              අද මිනිසා physically මහන්සි වෙලා ඉන්නේ වැඩ නිසා විතරක් නෙවෙයි. නොනවතින notifications, short videos, fake success, pressure, loneliness සහ අවධානය බිඳී යාම නිසා මනස ඇතුළේ ලොකු ඝෝෂාවක් හැදිලා තියෙනවා.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              “ඝෝෂාවෙන් ඔබ්බට” කියන්නේ ඒ ඝෝෂාව හඳුනාගෙන, තමන්ගේ මනස, අවධානය, inner peace සහ ජීවිතයේ සැබෑ පාලනය නැවත සොයාගන්න කැමති කෙනෙකුට ලියවුණු පොතක්.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl">
            <h3 className="text-2xl font-semibold">What you’ll understand</h3>
            <div className="mt-6 space-y-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Inside the book</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Chapter preview</h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-300">Buy කරන්න කලින් reader ට පොතේ value එක ඉක්මනින් තේරුම් යන්න chapter list එක clean විදිහට පෙන්වන්න.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {chapters.map((chapter, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-slate-200">
              {chapter}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_.9fr] md:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Free sample</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Read a few pages before buying</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Buy කරන්න කලින් reader ට sample pages කිහිපයක් download කරගන්න පුළුවන්. Sample එකෙන් trust build වෙනවා. Full PDF එක free දාන්නේ නැතුව selected pages 5–10ක් වෙනම PDF එකක් විදිහට upload කරන්න.
            </p>

            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <Lock className="mb-3 h-5 w-5 text-cyan-200" />
                <p className="font-semibold">Safe preview only</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">Full book එක නොව, selected sample pages පමණයි.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <Mail className="mb-3 h-5 w-5 text-cyan-200" />
                <p className="font-semibold">Collect leads</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">Name + WhatsApp / Email ගන්න simple form එකක් දාන්න.</p>
              </div>
            </div>

            <a href={samplePdfUrl} download className="mt-7 inline-flex items-center rounded-2xl bg-cyan-100 px-6 py-4 text-base font-semibold text-slate-950 shadow-xl hover:bg-white">
              <Download className="mr-2 h-5 w-5" /> Download Free Sample
            </a>
            <p className="mt-3 text-sm text-slate-400">Sample PDF file එක public folder එකට upload කළාම මේ button එකෙන් direct download වෙනවා.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Sample preview</h3>
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-slate-950">Free</span>
            </div>
            <div className="grid gap-4">
              {samplePages.map((page, index) => (
                <div key={index} className="rounded-2xl bg-white p-5 text-slate-950 shadow-xl">
                  <p className="mb-3 text-sm font-semibold text-slate-500">{page}</p>
                  <div className="mb-3 h-3 w-2/3 rounded-full bg-slate-200" />
                  <div className="mb-2 h-2 rounded-full bg-slate-100" />
                  <div className="mb-2 h-2 rounded-full bg-slate-100" />
                  <div className="h-2 w-4/5 rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Reader voices</p>
          <h2 className="text-3xl font-semibold md:text-4xl">What early readers say</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Launch stage එකේ real reviews නැත්නම් “early reader feedback” ලෙස honest wording use කරන්න. Fake review කියලා නොපෙන්වන්න.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="rounded-3xl border-white/10 bg-white/[0.04] text-white shadow-xl">
              <CardContent className="p-7">
                <Quote className="mb-4 h-7 w-7 text-cyan-200" />
                <p className="leading-7 text-slate-300">“{review.review}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-200/15 to-white/[0.03] p-8 shadow-2xl md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-cyan-100">
              <Star className="h-4 w-4" /> Digital PDF Edition
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">Get the full book today</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">Full Sinhala PDF book, mobile-friendly reading, lifetime personal access, WhatsApp delivery after payment confirmation.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 text-center text-slate-950 shadow-2xl">
            <p className="text-sm font-medium text-slate-500">Price</p>
            <p className="mt-1 text-5xl font-bold">Rs. 600</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Button className="mt-5 w-full rounded-2xl bg-slate-950 px-6 py-6 text-base text-white hover:bg-slate-800">
                Buy via WhatsApp
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" className="mt-3 w-full rounded-2xl px-6 py-6 text-base">
                <MessageCircle className="mr-2 h-5 w-5" /> Ask on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 md:px-10">
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(([q, a], index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-semibold text-white">{q}</h3>
              <p className="mt-2 leading-7 text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        <p>© 2026 Brain Vibration. Powered by Brain Vibration. Book by Chanmith Vinul Samarasekara.</p>
      </footer>
    </div>
  );
}
