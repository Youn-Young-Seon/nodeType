export abstract class View {
    
    protected container: HTMLElement;
    private htmlList: string[] | null;    

    constructor(container: string) {
        this.container = document.querySelector(container);
        this.htmlList = [];
    }

    protected getHtml = (): string => {
        const snapshot = this.htmlList.join('');
        this.htmlList = [];
        return snapshot;
    }

    protected addHtml = (template: string): void => {
        this.htmlList.push(template);
    }

    abstract render(): void;
}