import { Card } from "./Card";
import { motion } from "framer-motion";
export const CardSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: true }}
      className="grid bg-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    >
      <Card
        varient="green"
        ImageBackGround="white"
        title="Hip Augmentation"
        description="Etiam Sed diam blandit, congue tortor in eleifend metus aenean"
        ImageLink="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Firming.png"
      />
      <Card
        varient="purple"
        ImageBackGround="purple"
        title="Breast Implant"
        description="Etiam Sed diam blandit, congue tortor in eleifend metus aenean"
        ImageLink="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Breast_augmentation.png"
      />
      <Card
        varient="yellow"
        ImageBackGround="white"
        title="Rhinoplasty Surgery"
        description="Etiam Sed diam blandit, congue tortor in eleifend metus aenean"
        ImageLink="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Nose_surgery.png"
      />
      <Card
        varient="red"
        ImageBackGround="red"
        title="Facial Surgery"
        description="Etiam Sed diam blandit, congue tortor in eleifend metus aenean"
        ImageLink="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Surgery_point.png"
      />
      <Card
        varient="blue"
        ImageBackGround="white"
        title="Buttock Augmentation"
        description="Etiam Sed diam blandit, congue tortor in eleifend metus aenean"
        ImageLink="https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Buttock_augmentation.png"
      />
    </motion.div>
  );
};
