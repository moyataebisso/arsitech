"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "./ContactForm";
import { HIPAA_SERVICE_INTEREST } from "@/lib/constants";

export default function ContactFormWithParams() {
  const service = useSearchParams().get("service");
  const defaultService = service === "hipaa" ? HIPAA_SERVICE_INTEREST : "";
  return <ContactForm defaultService={defaultService} />;
}
