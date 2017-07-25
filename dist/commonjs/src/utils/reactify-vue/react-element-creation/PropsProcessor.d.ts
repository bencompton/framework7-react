export declare class PropsProcessor {
    private cachedPropKebabCase;
    getProps(args: any, children: any, componentOrComponentName: any, resolvedComponent: any, vueComponentInstance: any): {};
    private getClasses(args, vueComponent, props);
    private getStyle(args, vueComponent, props);
    private handleEvents;
    private getRef(args, vueComponent, resolvedComponent, props);
    private getPropsFromArgs(args, props);
    private getChildren(children, args, props);
    private convertAttrsToProps(args, componentOrComponentName, resolvedComponent, props);
    private getInnerHTML(args, props);
    private addCurrentComponentAsParentOfChildren(children, vueComponent);
    private handleRef(refName, vueComponentInstance, props);
}
