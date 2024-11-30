"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  dropdownItems?: { label: string; href: string; }[];
}

const Breadcrumb: React.FC<{ items: BreadcrumbItem[]; }> = ( { items } ) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );


  return (
    <nav className="flex justify-between pb-10" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        {items.map( ( item, index ) => (
          <li key={index} className="flex items-center">
            {item.dropdownItems ? (
              <div className="relative">
                {/* Dropdown Trigger */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="px-4" asChild>
                    <Button
                      variant="default"
                    >
                      {item.label}
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>

                  {/* Dropdown Menu Content */}
                  <DropdownMenuContent>
                    {item.dropdownItems?.map( ( dropdownItem, subIndex ) => (
                      <DropdownMenuItem key={subIndex}>
                        <a href={dropdownItem.href}>
                          {dropdownItem.label}
                        </a>
                      </DropdownMenuItem>
                    ) )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div>
                {item.href ? (
                  <Button
                    variant="default"
                    onClick={() => router.push( item.href! )}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                  >
                    {item.label}
                  </Button>
                )}
              </div>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ) )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
