import Link from "next/link";

const Button = ({href, className, label}) => {
  return (
    <Link href={href}>
      <div className={className}>
        <p>{label}</p>
      </div>
    </Link>    
  );
};

export default Button;