import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Hero } from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/i18n';

interface ContactFormState {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const INITIAL_STATE: ContactFormState = {
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
};

export function ContactPage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<ContactFormState | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = copy.contact.errors.name;
    }
    if (!form.email.trim()) {
      nextErrors.email = copy.contact.errors.emailEmpty;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = copy.contact.errors.emailInvalid;
    }
    if (!form.subject.trim()) {
      nextErrors.subject = copy.contact.errors.subject;
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = copy.contact.errors.message;
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmittedData({ ...form });
    setForm(INITIAL_STATE);
  };

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div>
      <Hero
        eyebrow={copy.contact.eyebrow}
        title={copy.contact.title}
        subtitle={copy.contact.subtitle}
        compact
      />

      <section className="bg-[#0D120F] py-14 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl font-semibold text-[#F5F7F4] tracking-tight">
                  {copy.contact.leftHeading}
                </h2>
                <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                  {copy.contact.leftDesc}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-md border border-[#F5F7F4]/10 bg-[#151C17] space-y-5">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-[#A7B3A9] tracking-[0.06em]">
                    {copy.contact.companyLabel}
                  </p>
                  <p className="text-base font-medium text-[#F5F7F4]">
                    Fivers Corp
                  </p>
                </div>

                <div className="space-y-1 pt-4 border-t border-[#F5F7F4]/10">
                  <p className="text-xs font-mono text-[#A7B3A9] tracking-[0.06em]">
                    {copy.contact.locationLabel}
                  </p>
                  <p className="text-base text-[#F5F7F4]">
                    {copy.contact.locationValue}
                  </p>
                </div>

                <div className="space-y-1 pt-4 border-t border-[#F5F7F4]/10">
                  <p className="text-xs font-mono text-[#A7B3A9] tracking-[0.06em]">
                    {copy.contact.focusLabel}
                  </p>
                  <p className="text-sm text-[#A7B3A9]">
                    {copy.contact.focusValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submittedData ? (
                <div
                  role="status"
                  className="p-6 sm:p-10 rounded-md border border-[#C5F03C]/35 bg-[#151C17] space-y-6"
                >
                  <div className="w-11 h-11 rounded-sm bg-[#C5F03C]/12 border border-[#C5F03C]/35 text-[#C5F03C] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-[#F5F7F4]">
                      {copy.contact.successTitle}
                    </h3>
                    <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                      {copy.contact.successBodyPrefix}{' '}
                      <span className="text-[#F5F7F4] font-medium">
                        {submittedData.name}
                      </span>
                      . {copy.contact.successBodyMiddle}{' '}
                      <span className="text-[#F5F7F4] font-medium">
                        &ldquo;{submittedData.subject}&rdquo;
                      </span>{' '}
                      {copy.contact.successBodySuffix}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto px-5 py-2.5 rounded-sm border border-[#F5F7F4]/20 bg-[#0D120F] text-sm font-medium text-[#F5F7F4] hover:border-[#C5F03C]/50 hover:text-[#C5F03C] transition-colors cursor-pointer"
                    >
                      {copy.contact.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-5 sm:p-8 lg:p-10 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#F5F7F4]"
                      >
                        {copy.contact.nameLabel}{' '}
                        <span className="text-[#C5F03C]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder={copy.contact.namePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-sm border border-[#F5F7F4]/15 bg-[#0D120F] text-sm text-[#F5F7F4] placeholder:text-[#A7B3A9]/55 focus:outline-none focus:border-[#C5F03C]"
                      />
                      {errors.name && (
                        <p className="text-xs text-[#F2B84B]">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[#F5F7F4]"
                      >
                        {copy.contact.emailLabel}{' '}
                        <span className="text-[#C5F03C]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder={copy.contact.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-sm border border-[#F5F7F4]/15 bg-[#0D120F] text-sm text-[#F5F7F4] placeholder:text-[#A7B3A9]/55 focus:outline-none focus:border-[#C5F03C]"
                      />
                      {errors.email && (
                        <p className="text-xs text-[#F2B84B]">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-organization"
                        className="block text-sm font-medium text-[#F5F7F4]"
                      >
                        {copy.contact.orgLabel}
                      </label>
                      <input
                        id="contact-organization"
                        type="text"
                        value={form.organization}
                        onChange={(e) =>
                          handleChange('organization', e.target.value)
                        }
                        placeholder={copy.contact.orgPlaceholder}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-sm border border-[#F5F7F4]/15 bg-[#0D120F] text-sm text-[#F5F7F4] placeholder:text-[#A7B3A9]/55 focus:outline-none focus:border-[#C5F03C]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium text-[#F5F7F4]"
                      >
                        {copy.contact.subjectLabel}{' '}
                        <span className="text-[#C5F03C]">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        placeholder={copy.contact.subjectPlaceholder}
                        aria-invalid={Boolean(errors.subject)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-sm border border-[#F5F7F4]/15 bg-[#0D120F] text-sm text-[#F5F7F4] placeholder:text-[#A7B3A9]/55 focus:outline-none focus:border-[#C5F03C]"
                      />
                      {errors.subject && (
                        <p className="text-xs text-[#F2B84B]">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#F5F7F4]"
                    >
                      {copy.contact.messageLabel}{' '}
                      <span className="text-[#C5F03C]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder={copy.contact.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      className="w-full px-4 py-3 rounded-sm border border-[#F5F7F4]/15 bg-[#0D120F] text-sm text-[#F5F7F4] placeholder:text-[#A7B3A9]/55 focus:outline-none focus:border-[#C5F03C] resize-y"
                    />
                    {errors.message && (
                      <p className="text-xs text-[#F2B84B]">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-[#A7B3A9]">
                      {copy.contact.requiredHintPrefix}{' '}
                      <span className="text-[#C5F03C]">*</span>{' '}
                      {copy.contact.requiredHintSuffix}
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center min-h-[46px] w-full sm:w-auto px-7 py-3 rounded-sm bg-[#C5F03C] text-[#0D120F] text-sm font-semibold hover:bg-[#d5f863] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C]"
                    >
                      {copy.contact.submitLabel}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
