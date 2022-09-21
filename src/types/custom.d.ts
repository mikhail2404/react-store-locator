declare module "*.svg" {
    const content: any;
    export default content;
}
interface Window {
    Drupal: {
        t(
            str: string,
            args?: { [index: string]: string },
            options?: { context: string }
        ): string;
        url(str: string): string;
    };
    drupalSettings: {
        path: {
            currentLanguage: string;
        };
    };
}

type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
interface JsonMap {
    [key: string]: AnyJson;
}
type JsonArray = Array<AnyJson>;

interface JSON {
    parse(
        text: string,
        reviver?: ((this: any, key: string, value: any) => any) | undefined
    ): AnyJson;
}