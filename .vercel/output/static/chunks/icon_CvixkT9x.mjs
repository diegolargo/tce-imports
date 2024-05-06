const icon = new Proxy({"src":"/_astro/icon.BUsSKZib.png","width":165,"height":98,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/icon.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/icon.png");
							return target[name];
						}
					});

export { icon as i };
