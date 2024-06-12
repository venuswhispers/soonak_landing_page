"use client"
import React from 'react';
import { Switch } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            setTheme ("light");

        } else {
            setTheme ("dark");
        }
    }
    return (
        <Switch
            defaultChecked = { theme === 'light' }
            size="sm"
            onChange={onchange}
            color="default"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <Icon icon="solar:sun-bold" />
                ) : (
                    <Icon icon="f7:moon-stars-fill" />
                )
            }
        ></Switch>
    )
}

export default ThemeSwitcher;