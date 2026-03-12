"use client"

import type React from "react"

import { useState } from "react"
import { useLocale } from "@/components/locale-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const { t } = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Verificar que las variables de entorno estén configuradas
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.")
      }

      // Enviar email usando EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error("Error sending email:", err)
      setError(err instanceof Error ? err.message : t.form.errorDefault)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.form.successTitle}</h3>
          <p className="text-muted-foreground">{t.form.successMessage}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">{t.form.sendMessage}</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-md">
            <div className="flex items-center">
              <AlertCircle className="w-4 h-4 text-red-600 mr-2" />
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">{t.form.name}</Label>
            <Input 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required 
              className="w-full border-2 border-gray-200 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-lg px-3 py-2 transition-colors duration-200" 
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">{t.form.email}</Label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
              className="w-full border-2 border-gray-200 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-lg px-3 py-2 transition-colors duration-200" 
            />
          </div>
          <div>
            <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">{t.form.subject}</Label>
            <Input 
              id="subject" 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required 
              className="w-full border-2 border-gray-200 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-lg px-3 py-2 transition-colors duration-200" 
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">{t.form.message}</Label>
            <Textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required 
              className="w-full border-2 border-gray-200 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-lg px-3 py-2 transition-colors duration-200 resize-none" 
              rows={4} 
            />
          </div>
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-6 py-3 text-base font-medium" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                {t.form.sending}
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {t.form.submit}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
