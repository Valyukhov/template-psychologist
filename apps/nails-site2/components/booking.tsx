"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }
  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 md:py-32 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4">Заявка отправлена!</h2>
          <Button onClick={() => setIsSubmitted(false)}>Записаться еще</Button>
        </div>
      </section>
    )
  }
  return (
    <section id="booking" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">Запись онлайн</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-balance">Запишитесь на прием</h2>
          </div>
          <Card className="bg-background border-border">
            <CardHeader><CardTitle className="text-xl font-serif">Форма записи</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2"><Label htmlFor="name">Ваше имя *</Label><Input id="name" required /></div>
                <div className="space-y-2"><Label htmlFor="phone">Телефон *</Label><Input id="phone" type="tel" required /></div>
                <div className="space-y-2"><Label htmlFor="message">Комментарий</Label><Textarea id="message" rows={3} /></div>
                <Button type="submit" size="lg" className="w-full">Отправить заявку</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
