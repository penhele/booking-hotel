import ContactForm from "@/components/contactForm";
import HeaderSection from "@/components/headerSection";
import { Metadata } from "next";
import React from "react";
import { IoCallOutline, IoLocateOutline, IoMailOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Contact",
};

function ContactPage() {
  return (
    <div>
      <HeaderSection
        title="Contact Us"
        subTitle="Lorem ipsun dolor sit amet."
      />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Get In Touch Today
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              deleniti, ipsum consequatur aliquam eius beatae.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoMailOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Email : </h4>
                  <p>email-us@example.com</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoCallOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">
                    Phone Number :{" "}
                  </h4>
                  <p>+62 818 1234 5678</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Address : </h4>
                  <p>Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
