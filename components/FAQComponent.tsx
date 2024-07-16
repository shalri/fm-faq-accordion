import { faqs } from "@/lib/data";

export default function FAQComponent() {
  return (
    <section className="flex flex-col items-center justify-center rounded-md bg-white">
      <h1 className="text-3xl font-bold text-zinc-500">FAQs</h1>
      {faqs.map((faq) => (
        <div className="" key={faq.id}>
          <div className="">{faq.question}</div>
          <div className="">{faq.answer}</div>
        </div>
      ))}
    </section>
  );
}
