import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-md dark:shadow-border h-auto flex flex-col justify-between",
      className
    )}
    {...props}
  />
) );
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
  <div
    ref={ref}
    className={cn( "flex flex-col space-y-1.5 p-6", className )}
    {...props}
  />
) );
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
  <div
    ref={ref}
    className={cn(
      "font-semibold text-lg leading-none tracking-widest text-card-foreground",
      className
    )}
    {...props}
  />
) );
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
  <div
    ref={ref}
    className={cn(
      "text-sm text-foreground font-extralight",
      className
    )}
    {...props}
  />
) );
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
  <div ref={ref} className={cn( "p-6 pt-0", className )} {...props} />
) );
CardContent.displayName = "CardContent";

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
  <div ref={ref} className={cn( "p-6 pt-0", className )} {...props} />
) );
CardBody.displayName = "CardBody";

const CardActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
  <div ref={ref} className={cn( "px-6 pt-0 flex space-x-4", className )} {...props} />
) );
CardActions.displayName = "CardActions";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
  <div
    ref={ref}
    className={cn( "flex items-center p-6 pt-0 text-xs", className )}
    {...props}
  />
) );
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardBody,
  CardDescription,
  CardActions,
  CardFooter,
  CardHeader,
  CardTitle,
};
