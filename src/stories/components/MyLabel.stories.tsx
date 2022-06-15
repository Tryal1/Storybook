import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

//Exporta el component MyLabel
export default {
  //El titulo es como lo muestra en este caso en una carpeta
  //que adentro tenga Basic AllCaps Secondary
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes:{
    size:{control:'select'},
    color:{control:'select'}
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args={
    size:'normal',
    allCaps:false,//patilaziar toda la palabra
}

export const AllCaps = Template.bind({});
AllCaps.args={
    size:'normal',
    allCaps:true,//patilaziar toda la palabra
}

export const Secondary = Template.bind({});
Secondary.args={
    size:'normal',
    color:'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args={
    size:'normal',
    color:'tertiary',
}

export const CustomFonrtColor = Template.bind({});
CustomFonrtColor.args={
    size:'h1',
    fontColor: '#5517ac',
}