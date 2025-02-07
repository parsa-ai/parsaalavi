import { Send, Loader2, X } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  lang: "en" | "fa";
}

interface Notification {
  id: number;
  type: "success" | "error";
  message: string;
}

const FormP: React.FC<ContactProps> = ({ lang }) => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const content = {
    en: {
      title: "Contact Me",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      success: " Your message was sent successfully!",
      error: " Failed to send message. Please try again.",
    },
    fa: {
      title: "تماس با من",
      name: "نام",
      email: "ایمیل",
      subject: "موضوع",
      message: "پیام",
      send: "ارسال پیام",
      success: " پیام شما با موفقیت ارسال شد!",
      error: " ارسال پیام ناموفق بود، دوباره تلاش کنید.",
    },
  };

  const addNotification = (type: "success" | "error", message: string) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 10000);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "بدون نام";
    const email = formData.get("email")?.toString().trim() || "بدون ایمیل";
    const subject = formData.get("subject")?.toString().trim() || "بدون موضوع";
    const message = formData.get("message")?.toString().trim() || "بدون پیام";

    const botToken = "7551099987:AAEVn3k1BbxAu7UpQx8pHpgsf2fsp57ONeM";
    const chatId = "371097930";

    const text = `📩 فرم تماس جدید:\n\n👤 نام: ${name}\n✉️ ایمیل: ${email}\n📌 موضوع: ${subject}\n💬 پیام:\n${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (response.ok) {
        addNotification("success", content[lang].success);
        (event.target as HTMLFormElement).reset();
      } else {
        addNotification("error", content[lang].error);
      }
    } catch (error) {
      addNotification("error", content[lang].error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* نمایش نوتیفیکیشن‌ها */}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-center justify-between gap-2 px-4 py-2 rounded-lg text-white shadow-lg transition-all ${notif.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}
          >
            <span>{notif.message}</span>
            <button onClick={() => setNotifications(notifications.filter(n => n.id !== notif.id))}>
              <X size={16} className="cursor-pointer" />
            </button>
          </div>
        ))}
      </div>

      {/* فرم تماس */}
      <form
        className="bg-Pslate-800/50 backdrop-blur-xs p-6 rounded-xl space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {content[lang].name}
          </label>
          <input
            required
            placeholder="Enter your name " 
            type="text"
            id="name"
            name="name"
            className="w-full bg-Pslate-900/50 placeholder-Pslate-200 border border-Pslate-700 rounded-lg px-4 py-2 focus:border-Pwhite transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {content[lang].email}
          </label>
          <input
            required
            placeholder="Enter your email  " 
            name="email"
            type="email"
            id="email"
            className="w-full bg-Pslate-900/50 placeholder-Pslate-200 border border-Pslate-700 rounded-lg px-4 py-2 focus:border-Pwhite transition-colors"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            {content[lang].subject}
          </label>
          <input
            required
            placeholder="Enter your subject " 
            name="subject"
            type="text"
            id="subject"
            className="w-full bg-Pslate-900/50 placeholder-Pslate-200 border border-Pslate-700 rounded-lg px-4 py-2 focus:border-Pwhite transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {content[lang].message}
          </label>
          <textarea
            required
            placeholder="Enter your message " 

            name="message"
            id="message"
            rows={4}
            className="w-full min-h-32 max-h-96 placeholder-Pslate-200 bg-Pslate-900/50 border border-Pslate-700 rounded-lg px-4 py-2 focus:border-Pwhite transition-colors"
          ></textarea>
        </div>

        {/* دکمه ارسال با لودینگ */}
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-Pwhite text-Pslate-900 px-6 py-3 rounded-full font-medium hover:bg-Pslate-200 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              {lang === "fa" ? "در حال ارسال..." : "Sending..."}
            </>
          ) : (
            <>
              {content[lang].send}
              <Send size={20} />
            </>
          )}
        </button>
      </form>
    </>
  );
};

export default FormP;
