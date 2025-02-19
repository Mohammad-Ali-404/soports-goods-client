import Container from "@/components/shared/Container";
import {
  BicepsFlexed,
  Cog,
  Footprints,
  ShieldPlus,
  TentTree,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Category = () => {
  return (
    <div className="bg-gray-300 pt-16 py-24 md:px-0 px-5">
      <Container>
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center justify-center space-y-6 pb-10"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl text-black font-serif font-bold tracking-tight sm:text-4xl uppercase">
              Explore Our Sports Categories
            </h2>
            <p className="text-black font-normal text-center">
              Find the perfect gear for your favorite sports and activities.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6"
        >
          <Link
            to={"/all-products"}
            state={{ category: "Running Shoes" }}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300 text-black transition-all group-hover:bg-gray-200 group-hover:text-black">
              <Footprints className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-black">
              Running Shoes
            </h3>
          </Link>
          <Link
            to={"/all-products"}
            state={{ category: "Athletic Apparel" }}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300 text-black transition-all group-hover:bg-gray-200 group-hover:text-black">
              <BicepsFlexed className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">
              Athletic Apparel
            </h3>
          </Link>
          <Link
            to={"/all-products"}
            state={{ category: "Fitness Equipment" }}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300 text-black transition-all group-hover:bg-gray-200 group-hover:text-black">
              <ShieldPlus className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">
              Fitness Equipment
            </h3>
          </Link>
          <Link
            to={"/all-products"}
            state={{ category: "Outdoor Gear" }}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300 text-black transition-all group-hover:bg-gray-200 group-hover:text-black">
              <Cog className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">
              Outdoor Gear
            </h3>
          </Link>
          <Link
            to={"/all-products"}
            state={{ category: "Team Sports" }}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300 text-black transition-all group-hover:bg-gray-200 group-hover:text-black">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">
              Team Sports
            </h3>
          </Link>
          <Link
            to={"/all-products"}
            state={{ category: "Hiking and Camping" }}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300 text-black transition-all group-hover:bg-gray-200 group-hover:text-black">
              <TentTree className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">
              Hiking and Camping
            </h3>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
};

export default Category;
