import { Button, Section } from "@repo/ui";

export default function App() {
  return (
    <main>
      <Section>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Название сайта
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Краткое описание услуг или предложения. Замените этот текст на
            контент вашего клиента.
          </p>
          <Button onClick={() => alert("CTA clicked!")}>
            Записаться на консультацию
          </Button>
        </div>
      </Section>
    </main>
  );
}
