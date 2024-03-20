import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import React from "react";
import Loader from "../../loaders/Spinner";
import classNames from "classnames";

interface IProps {
    /**
     * Função executada no evento de clique do botão
     */
    onClick?: MouseEventHandler,
    /**
     * Texto ou Elemento HTML que será renderizado dentro do Componente
     */
    children?: ReactNode | ReactNode[]
    /**
     * className personalizada do Componente
     */
    className?: string
    /**
     * Propríedade que desabilita botão e evento de clique
     */
    disabled?: boolean
    /**
     * Estilo do Componente: `outline`, `text` e `contained`
     * 
     * @default contained
     */
    variant?: "outline" | "contained"
    /**
     * Formatos do Componente: `block`, `square`, `contained`
     * 
     * @default contained
     */
    type?: "button" | "submit" | "reset"
    /**
     * Cores do Componente: `primary`, `secondary`, `error`
     * 
     * @default primary
     */
    color?: "primary" | "black"
    /**
     * Tamanhos do Componente: `lg`, `md`, `sm`
     */
    size?: "lg" | "md" | "sm"
    /**
     * Propriedade que desabilita e renderiza o loader dentro do Componente
     */
    isLoading?: boolean
    /**
     * Tamanho máximo do Componente
     */
    maxWidth?: string
}


const BaseBtn = (props: IProps) => {
	const {
		children,
		onClick,
		className,
		color = "primary",
		size = "lg",
		variant = "contained",
		disabled,
		type = "button",
		isLoading = false
	} = props;

	const theme = {
		primary: {
			outline: {
				base: "border bg-transparent border-primary text-primary hover:bg-primary hover:text-white",
				loading: "bg-transparent text-transparent border border-primary"
			},
			contained: {
				base: "bg-primary text-black border border-primary hover:bg-primaryDark hover:border-primaryDark",
				loading: "bg-primary text-primary border border-primary"
			},
		},
		black: {
			outline: {
				base: "border border-solid bg-transparent border-black text-black hover:bg-black hover:text-white",
				loading: "bg-transparent text-transparent border border-black"
			},
			contained: {
				base: "bg-black text-white border border-black hover:bg-gray-900",
				loading: "bg-black text-black border border-black"
			},
		},
	};

	const classes = {
		base: "relative focus:outline-none transition ease-in-out duration-300 font-medium rounded-md",
		disabled: {
			outline: "border bg-transparent border-gray-300 text-gray-300 cursor-not-allowed",
			contained: "bg-gray-300 text-gray-100 opacity-50 cursor-not-allowed"
		},
		size: {
			sm: "px-4 py-2 text-label-sm",
			md: "px-6 py-3 text-label-md",
			lg: "px-8 py-4 text-label-lg"
		}
	};

	const button_props: ButtonHTMLAttributes<HTMLButtonElement> = {
		onClick,
		disabled,
		type,
		className: classNames(
			classes.base,
			classes.size[size],
			disabled
				? classes.disabled[variant]
				: (
					!isLoading
						? theme[color][variant].base
						: theme[color][variant].loading
				),
			className
		)
	};

	return (
		<button {...button_props}>
			{isLoading && (
				<Loader
					color={variant === "outline" ? color : "white"}
					size={23}
				/>
			)}
			{children}
		</button>
	);
};

export default BaseBtn;