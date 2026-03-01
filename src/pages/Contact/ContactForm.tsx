import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email"),
  message: z
    .string()
    .min(10, "Message is too short")
    .max(1000, "Message is too long"),
});

type ContactFormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [serverState, setServerState] = useState<"idle" | "sent" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    mode: "onChange", // 体验更好：输入时就更新 isValid / errors
    defaultValues: { name: "", email: "", message: "" },
  });

  const canSubmit = useMemo(
    () => isValid && !isSubmitting,
    [isValid, isSubmitting],
  );

  const onSubmit = async (values: ContactFormValues) => {
    setServerState("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setServerState("sent");
      reset();
    } catch {
      setServerState("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl px-10 py-10 flex flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <label className="text-white/80 text-sm">Name</label>
        <input
          {...register("name")}
          placeholder="    Your name"
          className="h-12 rounded-xl px-4 bg-white/5 text-white outline-none border border-white/10 focus:border-white/30"
        />
        {errors.name && (
          <p className="text-sm text-rose-400">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white/80 text-sm">Email</label>
        <input
          {...register("email")}
          placeholder="    your@email.com"
          className="h-12 rounded-xl px-4 bg-white/5 text-white outline-none border border-white/10 focus:border-white/30"
        />
        {errors.email && (
          <p className="text-sm text-rose-400">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white/80 text-sm">Message</label>
        <textarea
          {...register("message")}
          placeholder="    Tell me what you want to build…"
          rows={6}
          className="min-h-40 rounded-xl px-4 py-3 bg-white/5 text-white outline-none border border-white/10 focus:border-white/30 resize-none"
        />
        {errors.message && (
          <p className="text-sm text-rose-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="h-12 rounded-xl font-semibold transition-all duration-300 bg-blue-400 text-black disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110"
      >
        {isSubmitting
          ? "Sending..."
          : serverState === "sent"
            ? "Sent ✅"
            : serverState === "error"
              ? "Try again"
              : "Submit"}
      </button>
    </form>
  );
}
