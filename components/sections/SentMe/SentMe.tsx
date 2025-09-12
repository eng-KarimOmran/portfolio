import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SentMe() {
  return (
    <section id="sent-me" className="py-10">
      <div className="md:col-span-2">
        <Title title="Sent Me" />
      </div>
      <form className="w-full p-5 mx-auto rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary-foreground">
        <div className="grid items-center gap-3">
          <Label htmlFor="name">Name :</Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div className="grid items-center gap-3">
          <Label htmlFor="email">Email :</Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div className="grid items-center gap-3 md:col-span-2">
          <Label htmlFor="message">Message :</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message here."
            className="h-40"
          />
        </div>
        <div>
          <Button variant="outline" type="submit">
            Send message
          </Button>
        </div>
      </form>
    </section>
  );
}
