# CloudPixel

CloudPixel is a cloud service that allows users to create secure tunnels to expose their local services to the internet. Users can buy tunnel plans, connect their systems, and even link a real domain using CloudPixel as the DNS provider.

---

## Features

- **Secure Tunnels:** Create encrypted tunnels from your local machine to the internet.
- **Custom Subdomains:** Each tunnel is accessible via a subdomain, e.g., `abc123.cloudpix.ir`.
- **Domain Integration:** Connect your own domains by setting CloudPixel nameservers (`alpha.ns.cloudpix.ir`).
- **Multi-Plan Support:** Different tunnel plans for free users, developers, and businesses.
- **Easy Setup:** Install `cloudedpixel` on your system and link it to your tunnel.
- **Cross-Platform Agent:** Supports Windows, Linux, and macOS.
- **Auto SSL:** Automatic TLS certificates for subdomains and custom domains.

---

## How It Works

1. **Purchase a Tunnel:** Choose a plan and get a tunnel assigned.
2. **Install CloudedPixel Agent:** Run the agent on your local system.
3. **Connect Your Tunnel:** The agent establishes a secure connection to CloudPixel Edge servers.
4. **Access Your Service:** Your service is now live on the assigned subdomain.
5. **Optional Domain Mapping:** Set your domain’s nameservers to CloudPixel to make it publicly accessible.

---

## Architecture

CloudPixel is built around a secure, scalable tunnel system. The architecture consists of three main components:

1. **CloudedPixel Agent (Client)**
   - Installed on the user’s local machine.
   - Establishes a secure, persistent tunnel to CloudPixel Edge servers.
   - Handles authentication, tunnel mapping, and automatic reconnection.
   - Supports multiple operating systems: Windows, Linux, macOS.

2. **Edge Servers**
   - Public servers with static IPs that route incoming traffic to the correct user tunnels.
   - Manages multiple simultaneous tunnels efficiently.
   - Performs load balancing and ensures low latency for connected users.

3. **DNS & Subdomain Management**
   - Assigns subdomains like `abc123.cloudpix.ir` for each tunnel.
   - Allows users to map their own domains by pointing to CloudPixel nameservers (`alpha.ns.cloudpix.ir`).
   - Routes requests from the public internet to the appropriate Edge server and user tunnel.

**Flow Diagram:**

[Local Service / Application]
           │
           ▼
[CloudedPixel Agent (Client)]
           │  (Secure & Encrypted Tunnel)
           ▼
[CloudPixel Edge Server]
           │
           ▼
[Public Internet / Subdomain Access]




- **Agent:** Handles tunnel creation, authentication, and connection management.
- **Edge Server:** Public server that routes traffic from subdomains to user systems.
- **DNS System:** Maps subdomains and user domains to the correct tunnel connections.

---

## Tunnel Plans

| Plan       | Use Case          | Features                             |
|-----------|-----------------|-------------------------------------|
| Free      | Testing          | Limited bandwidth, sleep after X mins |
| Developer | Dev environments | Single tunnel, basic features        |
| Pro       | Startups         | Multiple tunnels, custom domains     |
| Business  | Companies        | SLA, multiple regions, priority support |

---

## Security

- **Encrypted Connections:** All tunnels are encrypted using modern TLS standards.
- **Access Control:** Authentication tokens required for agent connections.
- **Port Restrictions:** Only allowed ports can be exposed.
- **Abuse Detection:** Prevents malicious use of the system.

---

## Getting Started

```bash
# Install cloudedpixel agent
# Configure your tunnel
# Connect and start serving your local service
```

## Roadmap

| Feature | Description |
|---------|-------------|
| Multi-Region Edge Servers | Deploy edge servers in multiple regions to reduce latency and improve performance. |
| Advanced GUI | Build a user-friendly interface for managing tunnels, subdomains, and domains. |
| Real-Time Logs & Analytics | Provide live monitoring of tunnel traffic and system activity. |
| Auto-Renewal of SSL Certificates | Automatically manage and renew TLS certificates for all subdomains and custom domains. |
| Public API | Offer a RESTful API for developers to programmatically manage tunnels and resources. |

---

## Contribution

We welcome contributions from developers and the community!  

- Open issues for bugs or feature requests.  
- Submit pull requests with improvements or new features.  
- Share ideas and help improve CloudPixel for everyone.  
