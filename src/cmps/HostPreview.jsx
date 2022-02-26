export function HostPreview({ host }) {
    return (
        <tr>
            <td>{host.host}</td>
            <td>{host.pingCount}</td>
        </tr>
    )
}