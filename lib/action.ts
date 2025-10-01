"use server";

import { prisma } from "@/lib/prisma";
import { ContaxtSchema, RoomSchema } from "./zod";
import { redirect } from "next/navigation";

export const SaveRoom = async (
  image: string,
  prevState: unknown,
  formData: FormData,
) => {
  if (!image) return { message: "Image is Required." };

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const ValidatedFields = RoomSchema.safeParse(rawData);
  if (!ValidatedFields.success)
    return { error: ValidatedFields.error.flatten().fieldErrors };

  const { name, description, price, capacity, amenities } =
    ValidatedFields.data;

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        image,
        price,
        capacity,
        RoomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/admin/room");
};

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
