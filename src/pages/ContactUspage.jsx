import { Input, Textarea, Button } from "@nextui-org/react"

const ContactUspage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <Input placeholder="Enter your name" />
        <Input placeholder="Enter your email" type="email" />
        <Textarea label="Message" placeholder="Enter your message" />
        <Button color="blue">Send Message</Button>
      </form>
    </div>
  )
}

export default ContactUspage
