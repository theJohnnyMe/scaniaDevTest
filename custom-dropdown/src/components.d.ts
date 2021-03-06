/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyDropdown {
        "optionList": any[];
        "placeholder": string;
    }
    interface MyTable {
        "tableDataProp": any[];
    }
}
declare global {
    interface HTMLMyDropdownElement extends Components.MyDropdown, HTMLStencilElement {
    }
    var HTMLMyDropdownElement: {
        prototype: HTMLMyDropdownElement;
        new (): HTMLMyDropdownElement;
    };
    interface HTMLMyTableElement extends Components.MyTable, HTMLStencilElement {
    }
    var HTMLMyTableElement: {
        prototype: HTMLMyTableElement;
        new (): HTMLMyTableElement;
    };
    interface HTMLElementTagNameMap {
        "my-dropdown": HTMLMyDropdownElement;
        "my-table": HTMLMyTableElement;
    }
}
declare namespace LocalJSX {
    interface MyDropdown {
        "onDropdownSelectedOption"?: (event: CustomEvent<string>) => void;
        "optionList"?: any[];
        "placeholder"?: string;
    }
    interface MyTable {
        "tableDataProp"?: any[];
    }
    interface IntrinsicElements {
        "my-dropdown": MyDropdown;
        "my-table": MyTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-dropdown": LocalJSX.MyDropdown & JSXBase.HTMLAttributes<HTMLMyDropdownElement>;
            "my-table": LocalJSX.MyTable & JSXBase.HTMLAttributes<HTMLMyTableElement>;
        }
    }
}
