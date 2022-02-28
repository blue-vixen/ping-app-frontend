import { HostPreview } from "./HostPreview"

export function HostList({ hosts }) {
    return (
        <section className='host-list'>
            <table>
                <thead>
                    <tr>
                        <th>Top Ping Sites</th>
                        <th>Ping Count</th>
                    </tr>
                </thead>
                <tbody>
                    {hosts.sort((a, b) => {
                        return b.pingCount - a.pingCount
                    }).slice(0, 5).map(host =>
                        <HostPreview host={host} key={host._id} />
                    )}
                </tbody>
            </table>
        </section>
    )
}