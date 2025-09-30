"use server";

import { prisma } from "@/lib/prisma";
import { ContaxtSchema } from "./zod";

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData,
) => {
  const ValidatedFields = ContaxtSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!ValidatedFields.success) {
    return { error: ValidatedFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = ValidatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return { message: "Thanks for contact us." };
  } catch (error) {
    console.log(error);
  }
};
