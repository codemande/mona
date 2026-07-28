/**
 * Mona Protect Mock API Client
 * Centralized mock data interface returning Promises with artificial latency.
 */

import { BRANDS, MODELS } from "../data/devices";
import { PARTNER_STORES } from "../data/stores";
import { FAQS } from "../data/faqs";
import { TESTIMONIALS } from "../data/testimonials";
import { CITIES } from "../data/cities";

const ARTIFICIAL_DELAY_MS = 250;

const delay = (ms = ARTIFICIAL_DELAY_MS) => new Promise(resolve => setTimeout(resolve, ms));

export async function getDeviceBrands() {
  await delay();
  return BRANDS;
}

export async function getModelsByBrand(brandId) {
  await delay();
  if (!brandId || brandId === "all") return MODELS;
  return MODELS.filter(m => m.brandId === brandId || m.brandName.toLowerCase() === brandId.toLowerCase());
}

export async function getModelBySlug(brandSlug, modelSlug) {
  await delay();
  return MODELS.find(m => 
    (m.slug === modelSlug || m.id === modelSlug) && 
    (!brandSlug || m.brandId === brandSlug || m.brandName.toLowerCase() === brandSlug.toLowerCase())
  ) || null;
}

export async function getStores(filters = {}) {
  await delay();
  let result = [...PARTNER_STORES];

  if (filters.city) {
    result = result.filter(s => s.city.toLowerCase() === filters.city.toLowerCase());
  }

  if (filters.state) {
    result = result.filter(s => s.state.toLowerCase() === filters.state.toLowerCase());
  }

  if (filters.service) {
    result = result.filter(s => s.services.includes(filters.service));
  }

  if (filters.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.address.toLowerCase().includes(q) || 
      s.city.toLowerCase().includes(q)
    );
  }

  return result;
}

export async function getFaqs(category = null) {
  await delay();
  if (!category) return FAQS;
  return FAQS.filter(f => f.category.toLowerCase() === category.toLowerCase());
}

export async function getTestimonials() {
  await delay();
  return TESTIMONIALS;
}

export async function getCities() {
  await delay();
  return CITIES;
}

export async function submitContact(payload) {
  await delay(500);
  console.log("[Mock API] submitContact payload:", payload);
  return { success: true, message: "Thank you for reaching out! A Mona representative will contact you shortly." };
}

export async function submitPartnerApplication(payload) {
  await delay(600);
  console.log("[Mock API] submitPartnerApplication payload:", payload);
  return { success: true, message: "Partner application submitted successfully. Our merchant team will review your details within 24 hours." };
}

export async function submitFinancingApplication(payload) {
  await delay(600);
  console.log("[Mock API] submitFinancingApplication payload:", payload);
  return { success: true, message: "Financing request received. An email with assessment steps has been sent to your business email." };
}

export async function submitCustomerLogin(payload) {
  await delay(400);
  console.log("[Mock API] submitCustomerLogin payload:", payload);
  if (!payload.email || !payload.password) {
    throw new Error("Please fill in all required fields.");
  }
  return { success: true, user: { email: payload.email, type: "customer", name: "Valued Customer" } };
}

export async function submitPartnerLogin(payload) {
  await delay(400);
  console.log("[Mock API] submitPartnerLogin payload:", payload);
  if (!payload.email || !payload.password) {
    throw new Error("Please fill in all required fields.");
  }
  return { success: true, user: { email: payload.email, type: "partner", name: "Partner Merchant" } };
}

/**
 * Generates WhatsApp click-to-chat links with preformatted contextual messages.
 */
export function waLink(messageText = "Hello Mona, I have a question about smartphone protection.", phone = "2347048100101") {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${phone}?text=${encoded}`;
}
