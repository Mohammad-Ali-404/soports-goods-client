import Container from "@/components/shared/Container";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Contact = () => {
  return (
    <div className="bg-slate-50 border-b border-gray-800 text-black py-24 md:px-0 px-5">
      <Container>
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        >
          <div>
            <div className="flex flex-col items-center">
              <div className="mb-6 inline-block rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-black">
                Get in Touch
              </div>
              <h2 className="mb-4 uppercase text-2xl font-serif max-w-2xl text-center font-bold tracking-tight md:text-4xl lg:text-3xl">
                Connect with Our Sports Experts
              </h2>
              <p className="mb-8 max-w-xl text-muted-foreground md:text-lg text-center">
                Have a question about our products or need help with an order?
                Our friendly team is here to assist you.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="rounded-lg bg-slate-300 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="mb-4 flex items-center">
                  <FaPhone className="mr-3 h-6 w-6 text-black" />
                  <h3 className="text-lg font-bold text-black">Phone</h3>
                </div>
                <p>+88 01792 344369</p>
              </div>
              <div className="rounded-lg bg-slate-300 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="mb-4 flex items-center">
                  <MdEmail className="mr-3 h-6 w-6 text-black" />
                  <h3>Email</h3>
                </div>
                <h3>alimohammadjhd@gmai.com</h3>
              </div>
              <div className="rounded-lg bg-slate-300 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="mb-4 flex items-center">
                  <IoShareSocial className="mr-3 h-6 w-6 text-black" />
                  <h3>Phone</h3>
                </div>
                <div className="flex text-black">
                  <Link to="/">
                    <FaFacebookSquare className="mr-3 h-6 w-6 " />
                  </Link>
                  <Link to="/">
                    <FaInstagramSquare className="mr-3 h-6 w-6" />
                  </Link>
                  <Link to="/">
                    <FaTwitter className="mr-3 h-6 w-6 " />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div>
            <div className="rounded-lg border bg-gray-200 border-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
              <form>
                <div className="mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="bg-white text-black placeholder-gray-200 mt-2"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white text-black placeholder-gray-200 mt-2"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={15}
                    placeholder="Enter your message"
                    className="bg-white text-black placeholder-gray-200 mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-800 text-white hover:bg-gray-900 transition-colors"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact;
