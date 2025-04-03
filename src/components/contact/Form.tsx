import { useActionState, useEffect, useRef } from "react";
import { submitAction } from "../../utils/submitActionForm";
import { startTransition } from "react";

export const Form = () => {
  const [state, formAction, isPending] = useActionState(submitAction, {
    errors: {},
    success: false,
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isPending && state.success) {
      formRef.current?.reset();
    } else if (Object.keys(state.errors).length > 0) {
      console.log("Errors found:", state.errors);
    }
  }, [isPending, state.success, state.errors]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      aria-label="Contact Form"
      className="form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="access_key"
        value="37cc401f-09ae-40de-85a4-df04861917f2"
      />
      <div className="field" aria-label="Your name">
        <label htmlFor="name" className="label">
          Your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          disabled={isPending}
          aria-invalid={state.errors.name ? "true" : "false"}
          aria-describedby={state.errors.name ? "name-error" : undefined}
          required
          autoComplete="name"
          placeholder="What's your name?"
          className="input"
        />
        {state.errors.name && (
          <p id="name-error" className="error">
            {state.errors.name}
          </p>
        )}
      </div>
      <div className="field" aria-label="Your Email">
        <label htmlFor="email" className="label">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          disabled={isPending}
          aria-invalid={state.errors.email ? "true" : "false"}
          aria-describedby={state.errors.email ? "email-error" : undefined}
          required
          autoComplete="email"
          placeholder="What's your email?"
          className="input"
        />
        {state.errors.email && (
          <p id="email-error" className="error">
            {state.errors.email}
          </p>
        )}
      </div>
      <div className="field" aria-label="Your message">
        <label htmlFor="message" className="label">
          Your message
        </label>
        <textarea
          rows={7}
          name="message"
          id="message"
          className="input"
          autoComplete="on"
          placeholder="What do you want to say?"
          disabled={isPending}
          aria-invalid={state.errors.message ? "true" : "false"}
          aria-describedby={state.errors.message ? "message-error" : undefined}
          required
        />
        {state.errors.message && (
          <p id="message-error" className="error">
            {state.errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="button-submit"
        disabled={isPending}
        aria-busy={isPending ? "true" : "false"}
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
