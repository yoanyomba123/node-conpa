import { HeaderService } from "./header.service.js";

export class HeaderTemplate {
    static update(render) {
        const start = Date.now();

        /* eslint-disable indent */
        render`
            <nav class="flex flex-row bt bb mh5 shadow-2">

                <div class="flex flex-wrap flex-row justify-around items-center min-w-70 b logo">
                    <a href="https://github.com/albertosantini/node-conpa">ConPA 5</a>
                    <span>Asset Allocation App</span>
                </div>

                <div class="flex flex-wrap flex-row justify-end items-center min-w-30 f7">
                    <div>
                        <toasts></toasts>
                        <div>${{
                            any: HeaderService.getStatus().then(({ namespace: status }) => {
                                const end = Date.now();

                                return `${status.message} (${end - start}ms)`;
                            }),
                            placeholder: "Loading..."
                        }}</div>
                    </div>
                </div>

            </nav>
        `;
        /* eslint-enable indent */
    }
}
