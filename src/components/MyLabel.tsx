import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Mensaje de la etiqueta
   */
  label: string;
  /**
   * Tamano de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Caps a minuscula o mayuscula
   */
  allCaps?: boolean;
  /**
   * Color de la etiqueta
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color Personalizado
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} `}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
