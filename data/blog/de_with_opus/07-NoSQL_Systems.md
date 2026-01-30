# Conversation
- conversationId: 793bac1b-4be1-4c23-82d4-1a024a20eda3
- endpoint: Anthropic
- title: NoSQL Systems Comprehensive Guide
- exportAt: 19:56:27 GMT+0100 (West Africa Standard Time)

## Options
- presetId: null
- conversationId: 793bac1b-4be1-4c23-82d4-1a024a20eda3
- endpoint: Anthropic
- endpointType: custom
- isArchived: false
- title: NoSQL Systems Comprehensive Guide
- user: 69022f50018861fd2b0b5923
- messages: 697ba356e76d4f39fba347d2,697ba3bde76d4f39fba34a0b,697ba3dae76d4f39fba34abe,697ba422e76d4f39fba34c97,697ba43ce76d4f39fba34d26,697ba48fe76d4f39fba34ec4,697ba56ee76d4f39fba362f5,697ba5b5e76d4f39fba36482,697ba6fce76d4f39fba36bd1,697ba73de76d4f39fba36d40,697ba753e76d4f39fba36da1,697ba79be76d4f39fba36f69,697ba7bee76d4f39fba37021,697ba808e76d4f39fba37229,697ba820e76d4f39fba372af,697ba874e76d4f39fba3748f,697ba886e76d4f39fba37510,697ba8b9e76d4f39fba3763f,697ba968e76d4f39fba379ef,697ba9afe76d4f39fba37b56,697ba9c6e76d4f39fba37be7,697baa00e76d4f39fba37d33,697baa1ce76d4f39fba37dca,697baa20e76d4f39fba37de7,697baa5be76d4f39fba37f12,697baa97e76d4f39fba380a2,697baab1e76d4f39fba38181,697bab02e76d4f39fba38351,697bab0de76d4f39fba38387,697bab43e76d4f39fba38478
- model: vertex_ai.anthropic.claude-opus-4-5
- tags: 
- createdAt: 2026-01-29T18:13:42.397Z
- updatedAt: 2026-01-29T18:47:31.771Z
- resendFiles: true
- agent_id: ephemeral
- _id: 697ba356e76d4f39fba347d3
- __v: 0
- files: 

## History
**User**
Role: You are a principal distributed systems architect with 18+ years of experience designing and operating high-scale data platforms for technology companies handling billions of daily events. You have led NoSQL migrations, designed multi-region distributed databases, and troubleshot production incidents involving consistency anomalies, hot partitions, and replication lag. Your experience spans document stores, key-value stores, wide-column databases, and graph databases across both self-managed and cloud-native deployments.

Task: Write a comprehensive technical guide covering the following core topics:

**NoSQL Fundamentals & Paradigm Shift**
- The limitations of relational databases that drove NoSQL adoption
- NoSQL database categories: document stores, key-value stores, wide-column stores, graph databases
- Schema-on-read vs. schema-on-write: implications for data modeling and evolution
- The CAP theorem: consistency, availability, partition tolerance—and why you must choose
- PACELC theorem: extending CAP to include latency trade-offs
- BASE vs. ACID: understanding "basically available, soft state, eventually consistent"
- When NoSQL is the right choice vs. when relational databases remain superior
- Polyglot persistence: using multiple database types in a single architecture

**Access-Pattern-Driven Design**
- The fundamental shift: designing for queries, not entities
- Identifying and documenting access patterns before modeling
- Denormalization as a feature, not a bug: embedding vs. referencing trade-offs
- Read/write ratio analysis and its impact on model design
- Time-series access patterns and their unique requirements
- Aggregation patterns: pre-computing vs. on-demand calculation
- Single-table design philosophy (DynamoDB-style) vs. multi-collection approaches
- Anti-patterns: forcing relational thinking onto NoSQL systems

**Document Store Deep Dive (MongoDB Focus)**
- Document model fundamentals: BSON, nested documents, arrays
- Collection design: one collection vs. many, naming conventions
- Embedding vs. referencing: decision framework with examples
- Schema design patterns: polymorphic, attribute, bucket, outlier, computed, subset
- Indexing strategies: single field, compound, multikey, text, geospatial, partial, TTL
- The aggregation framework: pipeline stages, performance considerations
- Read/write concerns and their consistency implications
- Transactions in MongoDB: multi-document ACID and its limitations
- Schema validation: enforcing structure in a flexible world

**Key-Value Store Deep Dive (Redis Focus)**
- Redis data structures: strings, lists, sets, sorted sets, hashes, streams, geospatial
- Choosing the right data structure for your access pattern
- Key naming conventions and namespace design
- Expiration and eviction policies: volatile-lru, allkeys-lru, volatile-ttl, noeviction
- Persistence options: RDB snapshots vs. AOF, hybrid approaches
- Pub/Sub and Streams for event-driven architectures
- Lua scripting for atomic operations
- Pipelining and transactions (MULTI/EXEC) for batched operations
- Redis as cache vs. Redis as primary datastore: different design considerations
- Memory optimization techniques: compression, encoding, data structure selection

**Consistency Models in Distributed Systems**
- Strong consistency: what it means and what it costs
- Eventual consistency: definition, convergence, and practical implications
- Causal consistency, read-your-writes, monotonic reads, session consistency
- Consistency levels in practice: tunable consistency (Cassandra), read/write concerns (MongoDB)
- Conflict resolution strategies: last-write-wins, vector clocks, CRDTs
- The consistency/latency trade-off in geo-distributed deployments
- Designing applications that tolerate eventual consistency
- Consistency anomalies in production: detection and mitigation

**Replication & High Availability**
- Primary-secondary (master-slave) replication: mechanics and failure modes
- Replica sets in MongoDB: elections, priority, hidden members, delayed replicas
- Redis replication: asynchronous replication, WAIT command, replica-read trade-offs
- Replication lag: causes, measurement, and application-level handling
- Failover mechanisms: automatic vs. manual, split-brain prevention
- Read scaling with replicas: consistency trade-offs
- Cross-datacenter replication: active-passive vs. active-active patterns

**Sharding & Horizontal Scaling**
- Why shard: capacity limits, throughput ceilings, geographic distribution
- Shard key selection: the most critical decision in distributed design
- Hash-based vs. range-based sharding: trade-offs and use cases
- Compound shard keys and their benefits
- Hot partitions (hot spots): causes, detection, and remediation
- Chunk splitting and balancing in MongoDB
- Redis Cluster: hash slots, resharding, client-side routing
- Cross-shard operations: scatter-gather queries and their performance implications
- Shard key immutability and migration strategies

**Time-To-Live (TTL) & Data Lifecycle Management**
- TTL as a design primitive: automatic data expiration
- MongoDB TTL indexes: implementation, granularity, and monitoring
- Redis TTL: per-key expiration, EXPIRE vs. EXPIREAT, passive vs. active expiration
- TTL patterns: session management, cache invalidation, regulatory compliance
- Sliding window TTL for activity-based expiration
- TTL and storage cost optimization
- Archival patterns: moving expired data to cold storage before deletion

**Operational Considerations**
- Capacity planning for NoSQL systems: memory, storage, IOPS, network
- Monitoring key metrics: latency percentiles, operation counters, replication lag, memory usage
- Backup and restore strategies for distributed databases
- Schema migrations in schemaless databases: versioning and compatibility
- Connection pooling and connection management
- Query profiling and slow query analysis

Audience: Mid-level data engineers with strong relational database backgrounds who are expanding into distributed systems and NoSQL technologies. Assume solid understanding of SQL, normalization, indexing, and basic ACID transactions—but limited hands-on experience with distributed systems concepts, eventual consistency, or NoSQL data modeling. Learners are technically curious and want to understand the "why" behind design decisions, not just recipes to follow.

**Primary Technology Focus:**
- Document Store: MongoDB 6.x+ (provide shell commands, query syntax, aggregation pipelines, and driver patterns)
- Key-Value Store: Redis 7.x+ (provide CLI commands, data structure operations, and client patterns)

**Secondary/Contextual Coverage:**
- Note significant differences in Amazon DynamoDB (single-table design, partition key/sort key, GSIs, on-demand vs. provisioned capacity)
- Note significant differences in Apache Cassandra (wide-column model, partition keys, clustering columns, tunable consistency)
- Briefly acknowledge cloud-native services: MongoDB Atlas, Amazon ElastiCache, Azure Cosmos DB

**Required Elements:**

**Structure:** Use clear hierarchical headings (H1/H2/H3), begin with an executive summary, and follow a logical progression from paradigm foundations (NoSQL categories, CAP theorem) through design principles (access patterns, consistency models) to implementation specifics (MongoDB, Redis) and advanced distributed patterns (sharding, replication). Conclude with the capstone project specification.

**Diagrams:** Include Mermaid diagrams to illustrate:
- NoSQL database category comparison (quadrant showing data model vs. primary use case)
- CAP theorem visualization with database examples in each region
- Embedding vs. referencing decision flowchart
- Eventual consistency timeline showing write propagation across replicas
- MongoDB replica set architecture with primary election flow
- Redis Cluster hash slot distribution and client routing
- Shard key selection decision tree
- Hot partition visualization (before and after proper shard key design)
- TTL-based data lifecycle flow
- The complete Event Logging Platform architecture (capstone project)

**Case Studies:** Provide 5–6 realistic, illustrative scenarios showing:
- The initial problem (symptoms such as hot partitions causing throttling, stale reads from replication lag, unbounded collection growth from missing TTL, cross-shard query timeouts, cache stampede under load, data loss from improper persistence configuration)
- Root cause analysis (what design decision, access pattern mismatch, or operational gap caused the issue)
- The solution implemented (shard key redesign, consistency level adjustment, TTL policy implementation, data model refactoring, caching strategy revision)
- Measurable outcomes (latency reduction, throughput increase, storage cost savings, eliminated hot spots, improved availability)

**Mistakes & Fixes:** Explicitly call out common mistakes, including:
- Treating MongoDB like a relational database (over-normalization, excessive JOINs via $lookup)
- Choosing shard keys based on uniqueness alone (ignoring query patterns and cardinality)
- Ignoring read/write concern implications until consistency bugs appear in production
- Using Redis without persistence for data you can't afford to lose
- Storing large objects in Redis (memory bloat, blocking operations)
- Not planning for TTL from the start (leading to unbounded growth)
- Assuming eventual consistency means "immediately consistent in most cases"
- Creating too many indexes in MongoDB (write amplification)
- Using KEYS command in production Redis (blocking full scan)
- Not accounting for replication lag in read-after-write scenarios

For each mistake: how to detect it (monitoring patterns, profiler output, cluster metrics, slow query logs) and how to prevent or correct it

**Code Examples:** Include real code snippets demonstrating:

*MongoDB:*
- Document schema designs for embedded vs. referenced relationships
- CRUD operations with proper read/write concerns
- Aggregation pipeline for analytics queries
- Index creation including compound, TTL, and partial indexes
- Schema validation rules with JSON Schema
- Replica set connection strings and read preference settings
- Change streams for event-driven patterns

*Redis:*
- Data structure selection for different use cases (leaderboards, sessions, rate limiting, queues)
- Key naming conventions with namespace prefixes
- TTL setting and management (EXPIRE, PERSIST, TTL commands)
- Atomic operations with Lua scripting
- Transaction blocks (MULTI/EXEC) with watch for optimistic locking
- Pub/Sub patterns for real-time notifications
- Stream operations (XADD, XREAD, XREADGROUP) for event logs
- Cluster-aware client connection patterns

*Comparison Examples:*
- Same use case (user sessions, event counting) implemented in both MongoDB and Redis
- Good vs. bad document schema designs with annotations
- Proper vs. improper shard key selections with performance implications

**Capstone Project Specification — Event Logging Platform:**

Provide a complete project specification including:

*Business Context:*
- A SaaS platform serving 10,000 customers generating application events, audit logs, and user activity streams
- Peak write throughput: 100,000 events per second
- Event retention: 90 days for standard events, 1 year for security/audit events
- Access patterns: real-time dashboards, user activity timelines, security investigations, aggregate analytics
- Multi-tenant architecture with tenant isolation requirements

*Required Schema & Architecture Elements:*

**MongoDB Collections:**
- `events` — Primary event store
  - Shard key design justification (compound key with tenant_id + timestamp considerations)
  - Document schema with nested event properties, metadata, and source information
  - TTL index configuration for 90-day retention
  - Compound indexes for common query patterns (tenant + time range, event type + time range, user + time range)
  - Write concern configuration for durability vs. throughput balance

- `audit_logs` — Security and compliance events
  - Extended retention (1 year) TTL configuration
  - Stricter write concern for compliance
  - Immutability patterns (no updates allowed)

- `event_aggregates` — Pre-computed rollups
  - Hourly and daily aggregates by tenant, event type
  - Bucket pattern implementation for time-series aggregation
  - Background aggregation job design

**Redis Data Structures:**
- Real-time counters: event counts per tenant (last 5 minutes, sliding window)
- Rate limiters: per-tenant and per-API-key rate limiting
- Recent events cache: last N events per user for quick timeline access
- Active users: HyperLogLog for unique user counting
- Session data: user session storage with sliding TTL

**Distributed Architecture:**
- MongoDB replica set configuration (3-node minimum)
- Sharding strategy with 4 initial shards, horizontal scaling plan
- Redis Cluster configuration with read replicas
- Write path: high-throughput ingestion with batching
- Read path: query routing based on access pattern
- Caching layer integration between MongoDB and Redis

**Advanced Patterns to Implement:**
- Event schema versioning for forward/backward compatibility
- Backpressure handling when write throughput exceeds capacity
- Multi-tenant shard key design avoiding hot partitions
- Time-bucketed collections for simplified TTL management (alternative approach)
- Read-your-writes consistency for user-facing operations
- Geo-distributed deployment considerations for multi-region access

*Deliverables Specification:*
- Architecture diagram showing all components, data flows, and consistency boundaries
- MongoDB schema designs with embedded JSON documents and index definitions
- Redis data structure specifications with key naming conventions
- Shard key analysis document with:
  - Candidate shard keys evaluated
  - Cardinality analysis
  - Query pattern coverage assessment
  - Hot partition risk assessment
  - Final selection with justification
- TTL policy document specifying retention rules per data type
- Capacity planning estimate (storage, memory, IOPS) for 1 billion events/day
- Consistency model documentation: which operations require strong consistency vs. accept eventual
- Sample queries for each major access pattern with expected performance characteristics
- Monitoring and alerting specification: key metrics, thresholds, runbook references
- Data migration playbook for shard key changes (future-proofing)

**Practical Guidance:** Include decision frameworks or checklists for:
- Choosing between document store, key-value store, wide-column store, or graph database
- Designing access-pattern-driven schemas: question template for gathering requirements
- Selecting shard keys: cardinality, frequency, monotonicity, query isolation evaluation
- Choosing consistency levels: decision matrix based on operation type and user expectations
- Redis data structure selection: flowchart from use case to data structure
- TTL policy design: retention requirements gathering template
- Incident response: diagnosing and resolving hot partition issues
- Incident response: handling replication lag affecting user experience

**Appendix Materials:**
- Quick reference card: MongoDB query operators and aggregation stages
- Quick reference card: Redis commands by data structure
- CAP/PACELC cheat sheet with database classifications
- Shard key selection worksheet template
- Consistency level comparison table (MongoDB, Cassandra, DynamoDB)
- Common interview questions on distributed systems and NoSQL with model answers
- Glossary of distributed systems terminology

Tone: Technically rigorous yet approachable for engineers coming from a relational background. Emphasize the paradigm shift in thinking—designing for access patterns rather than entities, accepting denormalization, understanding consistency trade-offs. Use analogies that bridge relational concepts to NoSQL (e.g., comparing shard keys to "choosing which filing cabinet to use" or eventual consistency to "replicated whiteboards in different offices"). Acknowledge that NoSQL requires accepting trade-offs, not finding perfect solutions.

Length: Aim for a thorough, reference-quality document (approximately 7,000–9,000 words or equivalent depth), with the capstone project specification adding an additional 2,000–2,500 words of detailed requirements and deliverable templates.


**Anthropic.claude Opus 4 5**
# NoSQL Systems: A Comprehensive Technical Guide for Data Engineers

## Executive Summary

This guide bridges your relational database expertise with the distributed systems thinking required for modern NoSQL platforms. Over the past two decades, I've witnessed—and often led—the paradigm shift from monolithic relational databases to distributed NoSQL systems. This transition isn't about replacing SQL; it's about recognizing that different data access patterns demand different storage paradigms.

**The core mental shift:** In relational databases, you model entities and their relationships, then figure out how to query them. In NoSQL, you identify your queries first, then design your data model to serve them efficiently. This inversion of the design process is the single most important concept in this guide.

We'll cover foundational theory (CAP theorem, consistency models), practical design patterns (access-pattern-driven modeling, denormalization strategies), and deep dives into MongoDB and Redis. Throughout, we'll use realistic case studies from production incidents I've helped resolve, showing how theoretical concepts manifest as 3 AM pages.

The capstone project—an Event Logging Platform handling 100,000 events per second—synthesizes everything into a cohesive design exercise that mirrors real-world distributed systems challenges.

---

# Part I: NoSQL Fundamentals & Paradigm Shift

## 1.1 The Limitations That Drove NoSQL Adoption

Relational databases served us well for decades, but they hit fundamental walls when facing:

**Scale limitations:** Traditional RDBMS scale vertically (bigger hardware), but there are physical limits to CPU speed, memory capacity, and disk I/O. When your dataset exceeds what fits on one machine—or your query volume exceeds what one machine can handle—you need horizontal scaling.

**Schema rigidity:** ALTER TABLE operations on billion-row tables can lock tables for hours. In agile development environments, schema evolution becomes a deployment bottleneck.

**Impedance mismatch:** Object-oriented applications require complex ORM layers to map objects to relational tables. Document databases store data closer to application objects.

**Cost at scale:** Commercial RDBMS licenses scale with CPU cores. When you need 100 machines, licensing costs become prohibitive.

**Geographic distribution:** Traditional replication is designed for disaster recovery, not serving users across continents with low latency.

```
The relational model assumes a single, consistent view of data on a single machine.
Distributed systems assume multiple machines, network partitions, and partial failures.
These assumptions are fundamentally incompatible.
```

## 1.2 NoSQL Database Categories

```mermaid
quadrantChart
    title NoSQL Database Categories
    x-axis Simple Data Model --> Complex Data Model
    y-axis Specialized Use Case --> General Purpose
    quadrant-1 Document Stores
    quadrant-2 Wide-Column Stores
    quadrant-3 Key-Value Stores
    quadrant-4 Graph Databases
    MongoDB: [0.65, 0.70]
    Redis: [0.25, 0.55]
    Cassandra: [0.55, 0.45]
    DynamoDB: [0.40, 0.60]
    Neo4j: [0.80, 0.35]
    Amazon Neptune: [0.75, 0.40]
```

### Key-Value Stores (Redis, Amazon DynamoDB, etcd)
The simplest model: store and retrieve values by key. Think of a distributed hash map. Extremely fast for point lookups, but limited query capabilities—you must know the key.

**Best for:** Caching, session storage, real-time leaderboards, rate limiting, configuration storage.

### Document Stores (MongoDB, Couchbase, Amazon DocumentDB)
Store semi-structured documents (typically JSON/BSON). Documents can contain nested objects and arrays. Supports rich queries within documents.

**Best for:** Content management, user profiles, product catalogs, event logging—anywhere data is naturally hierarchical and query patterns vary.

### Wide-Column Stores (Apache Cassandra, HBase, ScyllaDB)
Organize data by column families rather than rows. Excellent for time-series data and write-heavy workloads. Each row can have different columns.

**Best for:** Time-series data, IoT sensor data, event logging at extreme scale, distributed counters.

### Graph Databases (Neo4j, Amazon Neptune, JanusGraph)
Store entities as nodes and relationships as edges. Optimized for traversing connections—queries like "find all friends of friends who like jazz" that would require expensive JOINs in SQL.

**Best for:** Social networks, recommendation engines, fraud detection, network topology.

## 1.3 Schema-on-Read vs. Schema-on-Write

In relational databases, you define schema before inserting data (**schema-on-write**). The database enforces structure at write time—reject invalid data immediately.

NoSQL typically uses **schema-on-read**: store whatever structure you send, interpret it when queried. This provides flexibility but shifts validation responsibility to the application layer.

| Aspect | Schema-on-Write (RDBMS) | Schema-on-Read (NoSQL) |
|--------|------------------------|------------------------|
| Data validation | Database enforces | Application enforces |
| Schema evolution | ALTER TABLE (slow, locking) | Deploy new code (fast) |
| Data quality | Guaranteed by DB | Requires discipline |
| Heterogeneous data | Difficult (NULL columns) | Natural (optional fields) |
| Query optimization | Based on known schema | Must handle variations |

**Practical reality:** Most production MongoDB deployments use schema validation (a hybrid approach). Pure schema-on-read leads to data quality issues. MongoDB 3.6+ supports JSON Schema validation, giving you the flexibility of documents with the safety of schema enforcement where needed.

## 1.4 The CAP Theorem

```mermaid
graph TD
    subgraph CAP["CAP Theorem"]
        C[Consistency<br/>All nodes see same data]
        A[Availability<br/>Every request gets response]
        P[Partition Tolerance<br/>System works despite network splits]
    end
    
    subgraph CPDB["CP Systems"]
        CP1[MongoDB]
        CP2[HBase]
        CP3[Redis Cluster]
    end
    
    subgraph APDB["AP Systems"]
        AP1[Cassandra]
        AP2[CouchDB]
        AP3[DynamoDB*]
    end
    
    C --- CPDB
    P --- CPDB
    A --- APDB
    P --- APDB
    
    note["*DynamoDB offers tunable consistency"]
```

Eric Brewer's CAP theorem states that a distributed system can provide at most two of three guarantees:

- **Consistency (C):** Every read receives the most recent write or an error.
- **Availability (A):** Every request receives a non-error response (though it might not be the most recent data).
- **Partition Tolerance (P):** The system continues operating despite network partitions between nodes.

**Critical insight:** You don't "choose two." In distributed systems, network partitions **will happen**. The real choice is: when a partition occurs, do you sacrifice consistency (return potentially stale data) or availability (return errors)?

**MongoDB** is CP: During a network partition, if the primary is isolated, writes fail until a new primary is elected. You get consistency at the cost of brief unavailability.

**Cassandra** is AP: During a partition, all nodes continue accepting writes. You get availability, but reads might return stale data until partitions heal and data synchronizes.

## 1.5 PACELC Theorem: Adding Latency

CAP only describes behavior during partitions. PACELC extends this: "if Partition, choose Availability or Consistency; Else (normal operation), choose Latency or Consistency."

```
PACELC = if (Partition) { A or C } else { L or C }
```

Even without partitions, there's a trade-off between consistency and latency:
- **Strong consistency** requires coordination between nodes (higher latency)
- **Eventual consistency** returns immediately from local replicas (lower latency)

**DynamoDB example:** Strongly consistent reads cost 2x the capacity units and have higher latency because they must read from the leader. Eventually consistent reads are cheaper and faster but might return data up to a second old.

## 1.6 BASE vs. ACID

| Property | ACID (Relational) | BASE (NoSQL) |
|----------|------------------|--------------|
| **A**tomicity / **B**asically Available | All-or-nothing transactions | System always returns a response |
| **C**onsistency / **S**oft state | Data always valid per constraints | State may change over time without input |
| **I**solation / **E**ventually consistent | Concurrent transactions don't interfere | Replicas converge given time |
| **D**urability | Committed data persists | (Implied, not explicit) |

BASE isn't the opposite of ACID—it's a different set of priorities. BASE systems prioritize availability and partition tolerance, accepting that data might be temporarily inconsistent across replicas.

**The mental model:** ACID says "we'll wait until everything is perfect before responding." BASE says "we'll respond now with what we have, and eventually everything will be consistent."

## 1.7 When to Choose NoSQL vs. Relational

**Choose NoSQL when:**
- Data volume exceeds single-machine capacity
- Write throughput requirements exceed single-machine limits
- Schema flexibility is genuinely needed (not just to avoid design work)
- Access patterns are known and relatively fixed
- Eventual consistency is acceptable for most operations
- Geographic distribution is required

**Choose Relational when:**
- Complex transactions span multiple entities
- Ad-hoc queries are common and unpredictable
- Strong consistency is required for all operations
- Data relationships are complex and queried in multiple ways
- Regulatory requirements mandate ACID guarantees
- Team expertise is primarily relational

**Choose both (polyglot persistence) when:**
- Different subsystems have different access patterns
- You need the best tool for each job
- Your team can handle operational complexity of multiple databases

## 1.8 Polyglot Persistence

Modern architectures often use multiple database types:

```
┌─────────────────────────────────────────────────────────┐
│                    Application Layer                     │
├─────────────────────────────────────────────────────────┤
│   User Profiles    │   Shopping Cart   │   Product Search │
│   (MongoDB)        │   (Redis)         │   (Elasticsearch) │
├─────────────────────────────────────────────────────────┤
│   Order History    │   Recommendations  │   Analytics      │
│   (PostgreSQL)     │   (Neo4j)          │   (ClickHouse)   │
└─────────────────────────────────────────────────────────┘
```

**Trade-offs of polyglot persistence:**
- **Operational complexity:** Multiple systems to monitor, backup, upgrade
- **Data consistency:** Cross-database transactions are hard; often require eventual consistency
- **Team expertise:** Engineers must understand multiple paradigms
- **Infrastructure costs:** Each system has overhead

---

# Part II: Access-Pattern-Driven Design

## 2.1 The Fundamental Shift

**Relational thinking:** "What entities do I have? How do they relate? Normalize to 3NF. Queries will figure themselves out."

**NoSQL thinking:** "What questions will my application ask? How can I store data to answer those questions in a single read?"

This inversion is uncomfortable for engineers trained in relational modeling. We were taught that normalization is virtuous, that duplication is waste. In distributed systems, **network round trips are the enemy**, and denormalization is a tool to avoid them.

## 2.2 Documenting Access Patterns

Before designing any schema, enumerate your access patterns:

| ID | Access Pattern | Frequency | Latency SLA | Consistency Need |
|----|---------------|-----------|-------------|------------------|
| AP1 | Get user profile by user_id | 10K/sec | <10ms | Strong |
| AP2 | List user's recent orders | 1K/sec | <50ms | Eventual OK |
| AP3 | Get order with all line items | 500/sec | <20ms | Strong |
| AP4 | Search products by category | 2K/sec | <100ms | Eventual OK |
| AP5 | Get user's friends' activity | 100/sec | <200ms | Eventual OK |

This table drives every design decision: schema, indexes, shard keys, caching strategy.

## 2.3 Denormalization: Embedding vs. Referencing

```mermaid
flowchart TD
    A[Need to model a relationship?] --> B{How often accessed together?}
    B -->|Always together| C{Child data size?}
    B -->|Sometimes together| D{Update frequency?}
    B -->|Rarely together| E[Reference]
    
    C -->|Small <100KB| F{Child array unbounded?}
    C -->|Large| E
    
    F -->|No, bounded| G[Embed]
    F -->|Yes, can grow forever| E
    
    D -->|Child updates independently often| E
    D -->|Updates with parent| H{Duplication acceptable?}
    
    H -->|Yes| G
    H -->|No| E
    
    G[Embed in parent document]
    E[Reference with foreign key]
```

### Embedding (Denormalization)
Store related data in the same document:

```javascript
// User with embedded addresses
{
  _id: ObjectId("..."),
  name: "Alice Chen",
  email: "alice@example.com",
  addresses: [
    { type: "home", street: "123 Main St", city: "Seattle", zip: "98101" },
    { type: "work", street: "456 Tech Ave", city: "Seattle", zip: "98102" }
  ]
}
```

**Benefits:** Single read retrieves all data. Atomic updates. No JOINs.

**Drawbacks:** Document size limits (16MB in MongoDB). Duplication if data is shared. Harder to query embedded data independently.

### Referencing (Normalization)
Store references, query separately:

```javascript
// User document
{ _id: ObjectId("user123"), name: "Alice Chen", email: "alice@example.com" }

// Order documents (separate collection)
{ _id: ObjectId("order456"), user_id: ObjectId("user123"), total: 99.99, items: [...] }
{ _id: ObjectId("order789"), user_id: ObjectId("user123"), total: 149.99, items: [...] }
```

**Benefits:** No document size issues. Easier to query orders independently. No duplication.

**Drawbacks:** Multiple queries to assemble complete data. No atomic update across documents (pre-4.0) or transaction overhead (4.0+).

## 2.4 Read/Write Ratio Analysis

Your read/write ratio fundamentally shapes your design:

**Read-heavy (100:1 or higher):** Optimize for reads aggressively. Pre-compute aggregates. Denormalize heavily. Accept slower writes.

**Write-heavy (1:10 or lower):** Keep documents small. Minimize indexes. Consider write-optimized databases (Cassandra). Use async processing.

**Balanced (1:1 to 10:1):** Careful trade-offs. Index strategically. Consider separate read and write models (CQRS).

## 2.5 Single-Table Design vs. Multi-Collection

**DynamoDB-style single-table design:** Store all entity types in one table, differentiated by partition key and sort key patterns.

```
PK              SK                  Attributes
USER#123        PROFILE             {name, email, ...}
USER#123        ORDER#456           {total, status, ...}
USER#123        ORDER#456#ITEM#1    {product, qty, ...}
PRODUCT#789     METADATA            {name, price, ...}
```

**Benefits:** Single round-trip retrieves related entities. Works well with DynamoDB's pricing model.

**Drawbacks:** Complex to design and maintain. Hard to add new access patterns. Requires careful key design.

**MongoDB approach:** Typically uses multiple collections with embedding for closely related data. More intuitive, better tooling support, but potentially more round trips.

---

# Part III: Document Store Deep Dive (MongoDB)

## 3.1 Document Model Fundamentals

MongoDB stores data as BSON (Binary JSON) documents in collections. Each document can have a different structure, though in practice you want consistency.

```javascript
// Example document with nested structure
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  type: "order",
  customer: {
    id: ObjectId("507f1f77bcf86cd799439012"),
    name: "Alice Chen",
    email: "alice@example.com"
  },
  items: [
    { sku: "WIDGET-001", name: "Blue Widget", qty: 2, price: 29.99 },
    { sku: "GADGET-042", name: "Super Gadget", qty:


**User**
continue


**Anthropic.claude Opus 4 5**
1, price: 149.99 }
  ],
  totals: {
    subtotal: 209.97,
    tax: 18.90,
    shipping: 5.99,
    total: 234.86
  },
  status: "shipped",
  timestamps: {
    created: ISODate("2024-01-15T10:30:00Z"),
    updated: ISODate("2024-01-16T14:22:00Z"),
    shipped: ISODate("2024-01-16T14:22:00Z")
  },
  metadata: {
    source: "web",
    campaign: "winter-sale",
    version: 2
  }
}
```

**Key characteristics:**
- `_id` field is mandatory (auto-generated ObjectId if not provided)
- Maximum document size: 16MB
- Maximum nesting depth: 100 levels
- Field names are case-sensitive and stored in each document (consider short names for high-volume collections)

## 3.2 Schema Design Patterns

### Polymorphic Pattern
Store different entity types with varying structures in the same collection:

```javascript
// Products collection with polymorphic documents
// Book product
{
  _id: ObjectId("..."),
  type: "book",
  name: "Design Patterns",
  price: 49.99,
  author: "Gang of Four",
  isbn: "978-0201633610",
  pages: 395
}

// Electronics product
{
  _id: ObjectId("..."),
  type: "electronics",
  name: "Wireless Mouse",
  price: 29.99,
  manufacturer: "Logitech",
  warranty_months: 24,
  battery_type: "AA"
}
```

**Use when:** Entity types share common operations but have type-specific attributes.

### Bucket Pattern
Group related time-series data into buckets to reduce document count and improve query efficiency:

```javascript
// Instead of one document per sensor reading...
// Use hourly buckets
{
  _id: ObjectId("..."),
  sensor_id: "temp-sensor-42",
  bucket_start: ISODate("2024-01-15T10:00:00Z"),
  bucket_end: ISODate("2024-01-15T11:00:00Z"),
  readings: [
    { ts: ISODate("2024-01-15T10:00:15Z"), value: 72.5 },
    { ts: ISODate("2024-01-15T10:01:22Z"), value: 72.6 },
    { ts: ISODate("2024-01-15T10:02:18Z"), value: 72.4 },
    // ... up to ~200 readings per bucket
  ],
  stats: {
    count: 187,
    sum: 13542.3,
    min: 71.2,
    max: 73.8
  }
}
```

**Benefits:** Fewer documents to index. Pre-computed statistics. Better cache efficiency.

### Computed Pattern
Store computed values to avoid expensive calculations at read time:

```javascript
{
  _id: ObjectId("..."),
  product_id: "WIDGET-001",
  reviews: [
    { user: "alice", rating: 5, text: "Great!" },
    { user: "bob", rating: 4, text: "Good value" },
    { user: "carol", rating: 5, text: "Excellent" }
  ],
  // Computed fields - updated on each review add/modify
  computed: {
    review_count: 3,
    rating_sum: 14,
    average_rating: 4.67,
    last_computed: ISODate("2024-01-15T10:00:00Z")
  }
}
```

### Subset Pattern
Embed frequently accessed subset of related data, reference the full collection:

```javascript
// Movie document with subset of reviews
{
  _id: ObjectId("..."),
  title: "Inception",
  year: 2010,
  director: "Christopher Nolan",
  // Embed only the most recent/helpful reviews
  featured_reviews: [
    { user: "critic1", rating: 5, snippet: "A masterpiece of modern cinema..." },
    { user: "user42", rating: 5, snippet: "Mind-bending and visually stunning..." }
  ],
  review_stats: {
    total_count: 15420,
    average_rating: 4.7
  }
  // Full reviews in separate collection, referenced by movie_id
}
```

## 3.3 Indexing Strategies

### Index Types and Creation

```javascript
// Single field index
db.users.createIndex({ email: 1 })  // 1 = ascending, -1 = descending

// Compound index (order matters!)
db.orders.createIndex({ customer_id: 1, created_at: -1 })

// Multikey index (automatically created for array fields)
db.products.createIndex({ tags: 1 })

// Text index for full-text search
db.articles.createIndex({ title: "text", body: "text" })

// Geospatial index
db.locations.createIndex({ coordinates: "2dsphere" })

// Partial index (index only matching documents)
db.orders.createIndex(
  { status: 1, created_at: -1 },
  { partialFilterExpression: { status: "pending" } }
)

// TTL index (automatic document expiration)
db.sessions.createIndex(
  { last_activity: 1 },
  { expireAfterSeconds: 3600 }  // Expire 1 hour after last_activity
)

// Unique index
db.users.createIndex({ email: 1 }, { unique: true })

// Sparse index (only index documents with the field)
db.users.createIndex({ phone: 1 }, { sparse: true })
```

### Compound Index Ordering: The ESR Rule

**Equality → Sort → Range**

For a query like:
```javascript
db.orders.find({ 
  customer_id: "cust123",  // Equality
  created_at: { $gte: startDate, $lte: endDate }  // Range
}).sort({ total: -1 })  // Sort
```

Optimal index: `{ customer_id: 1, total: -1, created_at: 1 }`

**Why this order?**
1. Equality fields first narrow to exact matches
2. Sort fields next allow index-based sorting (avoid in-memory sort)
3. Range fields last can still use index after equality+sort

### Index Analysis

```javascript
// Explain query execution
db.orders.find({ customer_id: "cust123" }).explain("executionStats")

// Key metrics to examine:
// - "stage": "IXSCAN" (good) vs "COLLSCAN" (bad - full collection scan)
// - "totalKeysExamined": should be close to "nReturned"
// - "executionTimeMillis": lower is better
// - "indexBounds": shows which parts of index are used

// List all indexes
db.orders.getIndexes()

// Index usage statistics
db.orders.aggregate([{ $indexStats: {} }])
```

## 3.4 Aggregation Framework

The aggregation framework is MongoDB's data processing pipeline—think of it as a series of transformations applied to documents.

```javascript
// Example: Sales analytics by category and month
db.orders.aggregate([
  // Stage 1: Filter to 2024 orders
  { $match: { 
    created_at: { 
      $gte: ISODate("2024-01-01"), 
      $lt: ISODate("2025-01-01") 
    },
    status: "completed"
  }},
  
  // Stage 2: Unwind line items array
  { $unwind: "$items" },
  
  // Stage 3: Lookup product details
  { $lookup: {
    from: "products",
    localField: "items.product_id",
    foreignField: "_id",
    as: "product"
  }},
  
  // Stage 4: Flatten product array
  { $unwind: "$product" },
  
  // Stage 5: Group by category and month
  { $group: {
    _id: {
      category: "$product.category",
      month: { $dateToString: { format: "%Y-%m", date: "$created_at" } }
    },
    total_revenue: { $sum: { $multiply: ["$items.qty", "$items.price"] } },
    order_count: { $sum: 1 },
    avg_order_value: { $avg: { $multiply: ["$items.qty", "$items.price"] } }
  }},
  
  // Stage 6: Sort by revenue descending
  { $sort: { total_revenue: -1 } },
  
  // Stage 7: Reshape output
  { $project: {
    _id: 0,
    category: "$_id.category",
    month: "$_id.month",
    total_revenue: { $round: ["$total_revenue", 2] },
    order_count: 1,
    avg_order_value: { $round: ["$avg_order_value", 2] }
  }}
])
```

**Performance considerations:**
- Place `$match` and `$limit` early to reduce documents processed
- `$lookup` is expensive—consider denormalization if used frequently
- Use `$project` early to reduce document size through pipeline
- Create indexes that support `$match` and `$sort` stages

## 3.5 Read and Write Concerns

### Write Concern

```javascript
// Write acknowledged by primary only (default)
db.orders.insertOne(doc, { writeConcern: { w: 1 } })

// Write acknowledged by majority of replica set
db.orders.insertOne(doc, { writeConcern: { w: "majority" } })

// Write acknowledged by majority with journal sync
db.orders.insertOne(doc, { 
  writeConcern: { w: "majority", j: true } 
})

// Write with timeout
db.orders.insertOne(doc, { 
  writeConcern: { w: "majority", wtimeout: 5000 } 
})
```

| Write Concern | Durability | Performance | Use Case |
|---------------|------------|-------------|----------|
| `w: 0` | None (fire-and-forget) | Fastest | Logging where loss is acceptable |
| `w: 1` | Primary acknowledged | Fast | Default, most operations |
| `w: "majority"` | Majority acknowledged | Slower | Important data, transactions |
| `j: true` | Journaled | Slowest | Critical data, compliance |

### Read Concern

```javascript
// Read from primary (default) - may read uncommitted data
db.orders.find({ customer_id: "123" }).readConcern("local")

// Read only majority-committed data
db.orders.find({ customer_id: "123" }).readConcern("majority")

// Linearizable - strongest guarantee, highest latency
db.orders.find({ customer_id: "123" }).readConcern("linearizable")

// Snapshot - for multi-document transactions
db.orders.find({ customer_id: "123" }).readConcern("snapshot")
```

### Read Preference

```javascript
// Connection string with read preference
const uri = "mongodb://host1,host2,host3/mydb?replicaSet=rs0&readPreference=secondaryPreferred"

// Per-operation read preference
db.orders.find({}).readPref("secondary")
db.orders.find({}).readPref("nearest")  // Lowest latency node

// Read preference modes:
// - primary: Only primary (default, strongest consistency)
// - primaryPreferred: Primary, fallback to secondary
// - secondary: Only secondaries (may read stale data)
// - secondaryPreferred: Secondary, fallback to primary
// - nearest: Lowest network latency
```

## 3.6 Transactions

MongoDB 4.0+ supports multi-document ACID transactions:

```javascript
const session = client.startSession();

try {
  session.startTransaction({
    readConcern: { level: "snapshot" },
    writeConcern: { w: "majority" }
  });

  // Transfer funds between accounts
  await accounts.updateOne(
    { _id: fromAccountId },
    { $inc: { balance: -amount } },
    { session }
  );

  await accounts.updateOne(
    { _id: toAccountId },
    { $inc: { balance: amount } },
    { session }
  );

  // Create transaction record
  await transactions.insertOne({
    from: fromAccountId,
    to: toAccountId,
    amount: amount,
    timestamp: new Date()
  }, { session });

  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}
```

**Transaction limitations:**
- Maximum runtime: 60 seconds (default)
- Maximum transaction size: 16MB oplog entry
- Transactions across shards have higher overhead
- Performance impact: locks held until commit
- Design documents to minimize transaction need

## 3.7 Schema Validation

Enforce structure while retaining flexibility:

```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "name", "created_at"],
      properties: {
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description: "Must be a valid email address"
        },
        name: {
          bsonType: "string",
          minLength: 1,
          maxLength: 100
        },
        age: {
          bsonType: "int",
          minimum: 0,
          maximum: 150
        },
        status: {
          enum: ["active", "inactive", "suspended"],
          description: "Must be a valid status"
        },
        created_at: {
          bsonType: "date"
        },
        preferences: {
          bsonType: "object",
          properties: {
            theme: { enum: ["light", "dark"] },
            notifications: { bsonType: "bool" }
          }
        }
      }
    }
  },
  validationLevel: "moderate",  // or "strict"
  validationAction: "error"     // or "warn"
})
```

---

# Part IV: Key-Value Store Deep Dive (Redis)

## 4.1 Redis Data Structures

Redis is not just a key-value store—it's a data structure server. Choosing the right structure is crucial.

```mermaid
flowchart TD
    A[What's your use case?] --> B{Need to store...}
    
    B -->|Single value, counter| C[STRING]
    B -->|Collection of unique items| D{Need ordering?}
    B -->|Collection with duplicates| E{Need ordering?}
    B -->|Key-value pairs within key| F[HASH]
    B -->|Queue/Stack| G[LIST]
    B -->|Time-series events| H[STREAM]
    B -->|Geo locations| I[GEO]
    B -->|Approximate counting| J[HyperLogLog]
    
    D -->|Yes, by score| K[SORTED SET]
    D -->|No| L[SET]
    
    E -->|Yes, insertion order| G
    E -->|Yes, by score| K
```

### Strings

```redis
# Basic string operations
SET user:123:name "Alice Chen"
GET user:123:name
# Returns: "Alice Chen"

# With expiration
SET session:abc123 "{\"user_id\":123}" EX 3600  # Expires in 1 hour
SETEX session:abc123 3600 "{\"user_id\":123}"   # Equivalent

# Atomic increment/decrement
SET page:views:homepage 0
INCR page:views:homepage    # Returns: 1
INCRBY page:views:homepage 10  # Returns: 11
DECR page:views:homepage    # Returns: 10

# Bit operations
SETBIT user:123:features 0 1  # Enable feature 0
SETBIT user:123:features 3 1  # Enable feature 


**User**
continue


**Anthropic.claude Opus 4 5**
3
GETBIT user:123:features 0    # Returns: 1
BITCOUNT user:123:features    # Returns: 2

# String with conditional set
SET lock:resource:42 "owner:server1" NX EX 30  # Set only if not exists, 30s TTL
# Returns OK if set, nil if already exists (distributed lock pattern)
```

### Hashes

```redis
# Store user profile as hash
HSET user:123 name "Alice Chen" email "alice@example.com" plan "premium"
HGET user:123 name           # Returns: "Alice Chen"
HGETALL user:123             # Returns all fields and values
HMGET user:123 name email    # Get multiple fields

# Increment numeric field
HSET user:123 login_count 0
HINCRBY user:123 login_count 1   # Returns: 1

# Check field existence
HEXISTS user:123 phone       # Returns: 0 (doesn't exist)

# Get all field names
HKEYS user:123               # Returns: name, email, plan, login_count
```

**Use hashes when:** Storing objects with multiple fields. More memory-efficient than separate keys for each field. Atomic operations on individual fields.

### Lists

```redis
# Queue pattern (FIFO)
RPUSH queue:emails "{\"to\":\"alice@example.com\",\"subject\":\"Welcome\"}"
RPUSH queue:emails "{\"to\":\"bob@example.com\",\"subject\":\"Reminder\"}"
LPOP queue:emails            # Returns first email, removes it

# Blocking pop (wait for items)
BLPOP queue:emails 30        # Wait up to 30 seconds for item

# Stack pattern (LIFO)
LPUSH stack:undo "action1"
LPUSH stack:undo "action2"
LPOP stack:undo              # Returns: "action2"

# Recent items with capped list
LPUSH user:123:recent_views "product:456"
LTRIM user:123:recent_views 0 99   # Keep only last 100 items

# Get range
LRANGE user:123:recent_views 0 9   # Get last 10 views
```

### Sets

```redis
# User tags/interests
SADD user:123:interests "technology" "music" "travel"
SADD user:456:interests "music" "sports" "travel"

# Check membership
SISMEMBER user:123:interests "music"   # Returns: 1

# Set operations
SINTER user:123:interests user:456:interests  # Common: music, travel
SUNION user:123:interests user:456:interests  # All unique interests
SDIFF user:123:interests user:456:interests   # In 123 but not 456: technology

# Random member (for sampling)
SRANDMEMBER user:123:interests 2   # Get 2 random interests

# Cardinality
SCARD user:123:interests           # Returns: 3
```

### Sorted Sets

```redis
# Leaderboard
ZADD leaderboard 1500 "player:alice" 1350 "player:bob" 1420 "player:carol"

# Get top players
ZREVRANGE leaderboard 0 9 WITHSCORES   # Top 10, highest first

# Get player rank (0-indexed)
ZREVRANK leaderboard "player:alice"     # Returns: 0 (first place)

# Increment score
ZINCRBY leaderboard 50 "player:bob"     # Bob gains 50 points

# Range by score
ZRANGEBYSCORE leaderboard 1400 1500 WITHSCORES  # Players with 1400-1500 points

# Time-based sorted set (score = timestamp)
ZADD user:123:activity 1705320000 "login" 1705320060 "view:product:456"

# Get recent activity (last hour)
SET now 1705323600
ZRANGEBYSCORE user:123:activity 1705320000 1705323600

# Remove old entries
ZREMRANGEBYSCORE user:123:activity 0 1705233600  # Remove entries older than 24h
```

### Streams

```redis
# Add events to stream
XADD events:orders * order_id "12345" customer "alice" total "99.99"
# Returns: "1705320000000-0" (timestamp-sequence ID)

XADD events:orders * order_id "12346" customer "bob" total "149.99"

# Read from beginning
XRANGE events:orders - + COUNT 10

# Read new entries only (blocking)
XREAD BLOCK 5000 STREAMS events:orders $

# Consumer groups for distributed processing
XGROUP CREATE events:orders order-processors $ MKSTREAM

# Consumer reads from group
XREADGROUP GROUP order-processors consumer1 COUNT 10 STREAMS events:orders >

# Acknowledge processed message
XACK events:orders order-processors "1705320000000-0"

# Check pending messages (not yet acknowledged)
XPENDING events:orders order-processors
```

### HyperLogLog (Approximate Counting)

```redis
# Count unique visitors (probabilistic, ~0.81% error)
PFADD visitors:2024-01-15 "user:123" "user:456" "user:789"
PFADD visitors:2024-01-15 "user:123"  # Duplicate, won't increase count

PFCOUNT visitors:2024-01-15           # Returns approximate unique count

# Merge multiple HyperLogLogs
PFMERGE visitors:2024-01-week1 visitors:2024-01-15 visitors:2024-01-16 visitors:2024-01-17
```

**Use HyperLogLog when:** Counting unique items where exactness isn't critical. Uses only 12KB regardless of cardinality (can count billions of unique items).

## 4.2 Key Naming Conventions

Establish consistent naming patterns:

```redis
# Pattern: object-type:id:attribute
user:123:profile
user:123:sessions
user:123:preferences

# Pattern: object-type:id:relationship:related-id
user:123:following:456
order:789:items

# Pattern: namespace:object:id
myapp:user:123:profile
myapp:cache:product:456

# Pattern: environment prefix (if sharing Redis)
prod:user:123
staging:user:123

# Time-based keys
metrics:pageviews:2024-01-15
metrics:pageviews:2024-01-15:14  # Hour 14 (2 PM)
```

**Best practices:**
- Use colons as separators (convention, not requirement)
- Keep keys reasonably short (keys consume memory too)
- Make keys scannable with patterns: `SCAN 0 MATCH user:*:profile`
- Include version if schema might change: `v2:user:123:profile`

## 4.3 TTL and Expiration

```redis
# Set TTL on existing key
SET user:123:session "{...}"
EXPIRE user:123:session 3600      # Expire in 1 hour

# Set TTL with initial value
SETEX user:123:session 3600 "{...}"
SET user:123:session "{...}" EX 3600   # Equivalent

# Expire at specific timestamp
EXPIREAT user:123:session 1705406400   # Unix timestamp

# Check remaining TTL
TTL user:123:session              # Returns seconds remaining, -1 if no TTL, -2 if doesn't exist

# Remove TTL (make persistent)
PERSIST user:123:session

# Sliding window TTL pattern
GET user:123:session
EXPIRE user:123:session 3600      # Reset TTL on each access
```

### Eviction Policies

Configure in `redis.conf` or at runtime:

```redis
CONFIG SET maxmemory 4gb
CONFIG SET maxmemory-policy volatile-lru
```

| Policy | Behavior | Use Case |
|--------|----------|----------|
| `noeviction` | Return errors when memory full | When data loss is unacceptable |
| `volatile-lru` | Evict LRU keys with TTL set | Cache with mix of persistent and expiring keys |
| `allkeys-lru` | Evict LRU keys regardless of TTL | Pure cache, all keys expendable |
| `volatile-ttl` | Evict keys with shortest TTL | When TTL indicates priority |
| `volatile-random` | Random eviction of keys with TTL | When LRU overhead is concern |
| `allkeys-random` | Random eviction of any key | Simple cache, uniform access |
| `volatile-lfu` | Evict least frequently used (with TTL) | When recent access != important |
| `allkeys-lfu` | Evict least frequently used (any key) | When frequency matters more than recency |

## 4.4 Persistence Options

```redis
# RDB (point-in-time snapshots)
# redis.conf settings:
save 900 1        # Save if 1+ keys changed in 900 seconds
save 300 10       # Save if 10+ keys changed in 300 seconds
save 60 10000     # Save if 10000+ keys changed in 60 seconds

# Manual snapshot
BGSAVE            # Background save
LASTSAVE          # Timestamp of last successful save

# AOF (Append-Only File - log of all writes)
# redis.conf settings:
appendonly yes
appendfsync everysec   # Options: always, everysec, no

# AOF rewrite (compact the log)
BGREWRITEAOF
```

| Persistence | Durability | Performance | Recovery Speed |
|-------------|------------|-------------|----------------|
| None | Data loss on restart | Fastest | N/A |
| RDB only | Lose data since last snapshot | Fast | Fast (load single file) |
| AOF only | Lose ~1 second of data | Slower (fsync overhead) | Slower (replay log) |
| RDB + AOF | Best durability | Slowest | Uses AOF (more complete) |

**Recommendation:** Use RDB + AOF for important data. RDB provides fast backups and recovery; AOF provides durability.

## 4.5 Lua Scripting for Atomic Operations

Lua scripts execute atomically—no other commands run during script execution.

```redis
# Rate limiter script
EVAL "
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])

local current = redis.call('GET', key)
if current and tonumber(current) >= limit then
    return 0  -- Rate limited
end

local count = redis.call('INCR', key)
if count == 1 then
    redis.call('EXPIRE', key, window)
end
return 1  -- Allowed
" 1 ratelimit:user:123:api 100 60
# Args: 1 key, limit 100 requests, 60 second window

# Store script for reuse
SCRIPT LOAD "local key = KEYS[1] ..."
# Returns SHA1 hash

# Execute stored script
EVALSHA "a42059b356c875f0717db19a51f6aaa9161e77a2" 1 ratelimit:user:123:api 100 60
```

**Complex example: Distributed lock with timeout**

```lua
-- acquire_lock.lua
local lock_key = KEYS[1]
local lock_value = ARGV[1]  -- Unique identifier (e.g., UUID)
local ttl = tonumber(ARGV[2])

local acquired = redis.call('SET', lock_key, lock_value, 'NX', 'EX', ttl)
if acquired then
    return 1
else
    return 0
end

-- release_lock.lua
local lock_key = KEYS[1]
local lock_value = ARGV[1]

local current = redis.call('GET', lock_key)
if current == lock_value then
    redis.call('DEL', lock_key)
    return 1  -- Released
else
    return 0  -- Not owner or already expired
end
```

## 4.6 Pipelining and Transactions

### Pipelining (batch commands, reduce round trips)

```python
# Python example with redis-py
import redis

r = redis.Redis()
pipe = r.pipeline(transaction=False)  # No transaction, just batching

for i in range(1000):
    pipe.set(f"key:{i}", f"value:{i}")
    pipe.expire(f"key:{i}", 3600)

results = pipe.execute()  # Single round trip for 2000 commands
```

### Transactions (MULTI/EXEC)

```redis
# Atomic transfer between accounts
WATCH account:123:balance account:456:balance   # Optimistic locking

# Check balances
GET account:123:balance   # Returns: "500"
GET account:456:balance   # Returns: "300"

MULTI
DECRBY account:123:balance 100
INCRBY account:456:balance 100
EXEC   # Returns results, or nil if watched keys changed

# If another client modified the watched keys, EXEC returns nil
# Application must retry the transaction
```

## 4.7 Pub/Sub and Streams Comparison

### Pub/Sub (Fire-and-Forget)

```redis
# Subscriber (blocks waiting for messages)
SUBSCRIBE notifications:user:123

# Publisher (in another connection)
PUBLISH notifications:user:123 "{\"type\":\"message\",\"from\":\"bob\"}"
# Returns number of subscribers who received message

# Pattern subscription
PSUBSCRIBE notifications:user:*
```

**Pub/Sub limitations:**
- No persistence—messages lost if no subscribers
- No acknowledgment—can't know if message was processed
- No replay—new subscribers miss old messages

### Streams (Persistent, Replayable)

```redis
# Producer
XADD notifications:user:123 * type "message" from "bob" text "Hello!"

# Consumer (can start from beginning or specific ID)
XREAD STREAMS notifications:user:123 0   # From beginning
XREAD BLOCK 5000 STREAMS notifications:user:123 $   # New messages only

# Consumer group (distributed processing with acknowledgment)
XGROUP CREATE notifications:user:123 notification-processors $ MKSTREAM
XREADGROUP GROUP notification-processors worker1 STREAMS notifications:user:123 >
XACK notifications:user:123 notification-processors "1705320000000-0"
```

**Use Pub/Sub for:** Real-time notifications where loss is acceptable, chat applications, live updates.

**Use Streams for:** Event sourcing, task queues, audit logs, anything requiring durability or replay.

## 4.8 Redis Cluster

```mermaid
graph TB
    subgraph "Redis Cluster (16384 Hash Slots)"
        subgraph "Shard 1 (Slots 0-5460)"
            M1[Master 1]
            R1A[Replica 1A]
            R1B[Replica 1B]
        end
        subgraph "Shard 2 (Slots 5461-10922)"
            M2[Master 2]
            R2A[Replica 2A]
            R2B[Replica 2B]
        end
        subgraph "Shard 3 (Slots 10923-16383)"
            M3[Master 3]
            R3A[Replica 3A]
            R3B[Replica 3B]
        end
    end
    
    Client[Client] --> M1
    Client --> M2
    Client --> M3
    
    M1 -.->|Replication| R1A
    M1 -.->|Replication| R1B
    M2 -.->|Replication| R2A
    M2 -.->|Replication| R2B
    M3 -.->|Replication| R3A
    M3 -.->|Replication| R3B
```

```redis
# Key hash slot calculation
CLUSTER KEYSLOT user:123   # Returns slot number (0-16383)

# Hash tags force keys to same slot
SET {user:123}:profile "{...}"
SET {user:123}:settings "{...}"
# Both keys hash based on "user:123" → same slot → same shard

# Cluster info
CLUSTER INFO
CLUSTER NODES
CLUSTER SLOTS
```

**Cluster operations constraints:**


**User**
continue from where you stopped


**Anthropic.claude Opus 4 5**
```redis
# Multi-key operations must use hash tags for keys on same slot
MGET {user:123}:profile {user:123}:settings   # Works - same slot
MGET user:123:profile user:456:profile        # CROSSSLOT error - different slots

# Transactions must use same hash tag
MULTI
SET {order:789}:status "processing"
SET {order:789}:updated_at "2024-01-15T10:00:00Z"
EXEC   # Works - same slot

# Lua scripts - all keys must be on same slot
EVAL "..." 2 {user:123}:balance {user:123}:transactions ...   # Works
```

---

# Part V: Consistency Models in Distributed Systems

## 5.1 The Consistency Spectrum

```mermaid
graph LR
    subgraph "Consistency Spectrum"
        A[Eventual<br/>Consistency] --> B[Causal<br/>Consistency]
        B --> C[Session<br/>Consistency]
        C --> D[Read-Your-Writes]
        D --> E[Monotonic<br/>Reads]
        E --> F[Strong<br/>Consistency]
    end
    
    subgraph "Trade-offs"
        A -.-> LA[Lowest Latency<br/>Highest Availability]
        F -.-> LF[Highest Latency<br/>Lowest Availability]
    end
```

### Strong Consistency
Every read returns the most recent write. All nodes see the same data at the same time.

**Implementation cost:** Requires coordination (consensus protocols like Raft/Paxos). Writes must wait for acknowledgment from majority of nodes.

**Example:** MongoDB with `readConcern: "linearizable"` and `writeConcern: "majority"`

### Eventual Consistency
If no new updates are made, all replicas will eventually converge to the same value. "Eventually" might be milliseconds or minutes.

**The coffee shop whiteboard analogy:** Imagine a coffee shop chain where each location has a whiteboard listing daily specials. When headquarters updates the specials, they call each store, but calls happen at different times. For a while, different stores show different specials. Eventually, all stores are updated.

### Causal Consistency
Operations that are causally related are seen in the same order by all nodes. Concurrent (unrelated) operations may be seen in different orders.

**Example:** If I post a comment, then edit it, everyone sees the edit after the original—never the edit without the original.

### Read-Your-Writes (Session Consistency)
A client always sees their own writes. You won't post a tweet and then not see it on refresh.

**Implementation:** Sticky sessions to same replica, or read from primary after write.

### Monotonic Reads
Once you've seen a value, you won't see an older value in subsequent reads.

**Without monotonic reads:** You might see a user's order status as "shipped," then refresh and see "processing" (from a lagging replica).

## 5.2 Tunable Consistency in Practice

### MongoDB Read/Write Concerns

```javascript
// Strong consistency for critical operations
const orderResult = await orders.insertOne(order, {
  writeConcern: { w: "majority", j: true }
});

// Read the order back with strong consistency
const savedOrder = await orders.findOne(
  { _id: orderResult.insertedId },
  { readConcern: { level: "majority" } }
);

// Eventual consistency for read-heavy, less critical data
const products = await products.find({ category: "electronics" })
  .readConcern("local")
  .readPref("secondaryPreferred")
  .toArray();
```

### Cassandra Consistency Levels

```sql
-- Write to quorum of nodes
INSERT INTO orders (id, customer, total) VALUES (uuid(), 'alice', 99.99)
USING CONSISTENCY QUORUM;

-- Read from quorum (strong consistency when combined with quorum write)
SELECT * FROM orders WHERE id = ? CONSISTENCY QUORUM;

-- Read from single node (eventual consistency, lower latency)
SELECT * FROM orders WHERE id = ? CONSISTENCY ONE;
```

**Cassandra consistency formula:**
- Strong consistency: `R + W > N` (reads + writes > replication factor)
- With RF=3: QUORUM reads (2) + QUORUM writes (2) = 4 > 3 ✓

### DynamoDB Consistency Options

```python
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Orders')

# Eventually consistent read (default, cheaper, faster)
response = table.get_item(Key={'order_id': '12345'})

# Strongly consistent read (2x cost, higher latency)
response = table.get_item(
    Key={'order_id': '12345'},
    ConsistentRead=True
)
```

## 5.3 Conflict Resolution Strategies

When concurrent updates occur on different replicas, conflicts must be resolved.

### Last-Write-Wins (LWW)
Use timestamps; most recent write wins. Simple but can lose data.

```javascript
// MongoDB's default behavior for concurrent updates
// Last acknowledged write wins
db.users.updateOne(
  { _id: userId },
  { $set: { name: "Alice Smith", updated_at: new Date() } }
)
```

**Problem:** Clock skew between servers can cause "older" writes to win.

### Vector Clocks
Track causality with vector of counters per node. Detect concurrent updates and surface conflicts to application.

```
Write at Node A: [A:1, B:0, C:0]
Write at Node B: [A:0, B:1, C:0]  // Concurrent with above

// These are incomparable - neither happened before the other
// Application must resolve conflict (e.g., show both versions to user)
```

### CRDTs (Conflict-free Replicated Data Types)
Data structures that mathematically guarantee convergence regardless of update order.

**Examples:**
- G-Counter: Grow-only counter (increment always converges)
- PN-Counter: Counter with increment and decrement
- OR-Set: Observed-remove set (add/remove converge correctly)
- LWW-Register: Last-writer-wins register with timestamps

```javascript
// Redis CRDT example using sorted set for LWW
// Score is timestamp, guarantees convergence
ZADD user:123:attributes 1705320000 "name:Alice"
ZADD user:123:attributes 1705320001 "name:Alice Smith"  // Later timestamp wins

// Get current value (highest timestamp)
ZREVRANGE user:123:attributes 0 0
```

## 5.4 Designing for Eventual Consistency

**Practical patterns for applications:**

```javascript
// Pattern 1: Read-your-writes with session affinity
class UserService {
  async updateProfile(userId, updates) {
    const result = await this.db.users.updateOne(
      { _id: userId },
      { $set: updates },
      { writeConcern: { w: "majority" } }
    );
    
    // Store the operation time for this session
    this.session.lastWriteTime = result.operationTime;
    return result;
  }
  
  async getProfile(userId) {
    // Use afterClusterTime to ensure we see our writes
    return this.db.users.findOne(
      { _id: userId },
      { 
        readConcern: { 
          level: "majority",
          afterClusterTime: this.session.lastWriteTime 
        }
      }
    );
  }
}

// Pattern 2: Optimistic UI with reconciliation
class OrderService {
  async placeOrder(order) {
    // Immediately return optimistic ID
    const optimisticId = generateId();
    
    // Show user "Order Placed" immediately
    this.emitToUI('orderCreated', { id: optimisticId, status: 'pending' });
    
    try {
      // Actual database write (may take time for replication)
      const result = await this.db.orders.insertOne({
        _id: optimisticId,
        ...order,
        status: 'confirmed'
      });
      
      // Update UI when confirmed
      this.emitToUI('orderConfirmed', { id: optimisticId });
    } catch (error) {
      // Rollback UI on failure
      this.emitToUI('orderFailed', { id: optimisticId, error });
    }
  }
}

// Pattern 3: Idempotency for retry safety
class PaymentService {
  async processPayment(idempotencyKey, paymentDetails) {
    // Check if already processed
    const existing = await this.db.payments.findOne({ 
      idempotency_key: idempotencyKey 
    });
    
    if (existing) {
      return existing;  // Return cached result
    }
    
    // Process payment (external API call)
    const result = await this.paymentGateway.charge(paymentDetails);
    
    // Store with idempotency key
    await this.db.payments.insertOne({
      idempotency_key: idempotencyKey,
      ...result,
      created_at: new Date()
    });
    
    return result;
  }
}
```

---

# Part VI: Replication & High Availability

## 6.1 MongoDB Replica Sets

```mermaid
graph TB
    subgraph "MongoDB Replica Set"
        P[Primary<br/>Handles all writes]
        S1[Secondary 1<br/>Sync from Primary]
        S2[Secondary 2<br/>Sync from Primary]
        A[Arbiter<br/>Votes only]
    end
    
    Client[Application] -->|Writes| P
    Client -.->|Reads optional| S1
    Client -.->|Reads optional| S2
    
    P -->|Oplog Replication| S1
    P -->|Oplog Replication| S2
    
    subgraph "Election on Primary Failure"
        E1[S1 calls election]
        E2[Arbiter votes]
        E3[S1 becomes Primary]
    end
    
    P -.->|Failure| E1
    E1 --> E2
    E2 --> E3
```

### Replica Set Configuration

```javascript
// Initialize replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo1.example.com:27017", priority: 2 },  // Preferred primary
    { _id: 1, host: "mongo2.example.com:27017", priority: 1 },
    { _id: 2, host: "mongo3.example.com:27017", priority: 1 },
    { _id: 3, host: "mongo4.example.com:27017", priority: 0, hidden: true, slaveDelay: 3600 }  // Delayed replica for recovery
  ]
})

// Check replica set status
rs.status()

// Step down primary (for maintenance)
rs.stepDown(60)  // Step down for 60 seconds

// Add new member
rs.add("mongo5.example.com:27017")

// Remove member
rs.remove("mongo4.example.com:27017")
```

### Member Types

| Type | Purpose | Votes | Can Become Primary |
|------|---------|-------|-------------------|
| Primary | Handle writes, replicate to secondaries | Yes | N/A (is primary) |
| Secondary | Replicate from primary, can serve reads | Yes | Yes |
| Priority 0 | Replicate but never become primary | Yes | No |
| Hidden | Not visible to clients, for backups/analytics | Yes | No |
| Delayed | Time-lagged copy for recovery from errors | Yes | No |
| Arbiter | Vote only, no data | Yes | No |

### Connection Strings

```javascript
// Basic replica set connection
const uri = "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/mydb?replicaSet=rs0";

// With read preference
const uri = "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/mydb?replicaSet=rs0&readPreference=secondaryPreferred";

// With write concern
const uri = "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/mydb?replicaSet=rs0&w=majority&journal=true";

// Full production connection string
const uri = `mongodb://${user}:${password}@mongo1:27017,mongo2:27017,mongo3:27017/mydb` +
  `?replicaSet=rs0` +
  `&authSource=admin` +
  `&w=majority` +
  `&readPreference=primaryPreferred` +
  `&maxPoolSize=100` +
  `&retryWrites=true` +
  `&retryReads=true`;
```

## 6.2 Redis Replication

```redis
# On replica, connect to primary
REPLICAOF primary.example.com 6379

# Check replication status
INFO replication
# role:master/slave
# connected_slaves:2
# slave0:ip=10.0.0.2,port=6379,state=online,offset=12345,lag=0

# Promote replica to primary (on replica)
REPLICAOF NO ONE

# Wait for replication to catch up before returning
SET important:key "value"
WAIT 2 5000   # Wait for 2 replicas to acknowledge, timeout 5000ms
# Returns number of replicas that acknowledged
```

### Replication Lag Handling

```javascript
// Node.js pattern: write to primary, read from replica with lag awareness
const Redis = require('ioredis');

const primary = new Redis({ host: 'primary.example.com' });
const replica = new Redis({ host: 'replica.example.com' });

async function writeAndRead(key, value) {
  // Write to primary
  await primary.set(key, value);
  
  // Wait for replication (WAIT command)
  const replicasAcked = await primary.wait(1, 1000);
  
  if (replicasAcked >= 1) {
    // Safe to read from replica
    return replica.get(key);
  } else {
    // Fallback to primary read
    return primary.get(key);
  }
}

// Alternative: Use primary for reads after writes within session
class SessionAwareRedis {
  constructor(primary, replica) {
    this.primary = primary;
    this.replica = replica;
    this.recentWrites = new Map();  // key -> timestamp
  }
  
  async set(key, value) {
    await this.primary.set(key, value);
    this.recentWrites.set(key, Date.now());
  }
  
  async get(key) {
    const lastWrite = this.recentWrites.get(key);
    // If written in last 100ms, read from primary
    if (lastWrite && Date.now() - lastWrite < 100) {
      return this.primary.get(key);
    }
    return this.replica.get(key);
  }
}
```

## 6.3 Cross-Datacenter Replication

### Active-Passive Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                      PRIMARY REGION (US-East)                │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                      │
│  │ Primary │──│Secondary│──│Secondary│                      │
│  └────┬────┘  └─────────┘  └─────────┘                      │
│       │                                                      │
└───────┼──────────────────────────────────────────────────────┘
        │ Async Replication (WAN)
        ▼
┌───────────────────────────────────────────────────────────────┐
│                    SECONDARY REGION (US-West)                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                        │
│  │Secondary│──│Secondary│──│Secondary│  (Read-only, DR)       │
│  └─────────┘  └─────────┘  └─────────┘                        │
└───────


**User**
continue your response


**Anthropic.claude Opus 4 5**
────────────────────────────────────────────────────────┘
```

**Characteristics:**
- All writes go to primary region
- Secondary region for disaster recovery and read scaling
- Failover requires manual or automated promotion
- Simpler consistency model (single write location)

### Active-Active Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                      REGION A (US-East)                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                      │
│  │ Primary │──│Secondary│──│Secondary│                      │
│  └────┬────┘  └─────────┘  └─────────┘                      │
│       │                                                      │
└───────┼──────────────────────────────────────────────────────┘
        │ Bidirectional Async Replication
        ▼
┌───────────────────────────────────────────────────────────────┐
│                      REGION B (US-West)                        │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                        │
│  │ Primary │──│Secondary│──│Secondary│                        │
│  └─────────┘  └─────────┘  └─────────┘                        │
└───────────────────────────────────────────────────────────────┘
```

**Characteristics:**
- Both regions accept writes
- Requires conflict resolution strategy
- Lower latency for users in each region
- More complex consistency semantics
- MongoDB Atlas Global Clusters support this pattern

---

# Part VII: Sharding & Horizontal Scaling

## 7.1 Shard Key Selection

```mermaid
flowchart TD
    A[Choose Shard Key] --> B{High Cardinality?}
    B -->|No| C[❌ Reject: Will create hot spots]
    B -->|Yes| D{Supports Query Isolation?}
    
    D -->|No| E{Acceptable scatter-gather?}
    E -->|No| F[❌ Reject: Poor query performance]
    E -->|Yes| G[⚠️ Consider: Performance impact]
    
    D -->|Yes| H{Write Distribution?}
    
    H -->|Monotonic| I[❌ Reject: Hot partition on writes]
    H -->|Random/Hashed| J{Read Pattern?}
    
    J -->|Point lookups| K[✅ Good candidate]
    J -->|Range scans| L{Compound key possible?}
    
    L -->|Yes| M[✅ Consider compound key]
    L -->|No| N[⚠️ Trade-off: hash vs range]
    
    style C fill:#ffcccc
    style F fill:#ffcccc
    style I fill:#ffcccc
    style K fill:#ccffcc
    style M fill:#ccffcc
    style G fill:#ffffcc
    style N fill:#ffffcc
```

### Shard Key Properties

| Property | Description | Impact |
|----------|-------------|--------|
| **Cardinality** | Number of unique values | Low cardinality = hot partitions |
| **Frequency** | Distribution of values | Skewed = hot partitions |
| **Monotonicity** | Values increase over time | Monotonic = hot partition on latest shard |
| **Query Isolation** | Key appears in queries | Missing = scatter-gather queries |

### MongoDB Shard Key Examples

```javascript
// BAD: Low cardinality (only a few status values)
sh.shardCollection("mydb.orders", { status: 1 })
// Result: All "pending" orders on one shard

// BAD: Monotonically increasing (timestamp or ObjectId)
sh.shardCollection("mydb.events", { created_at: 1 })
// Result: All new writes go to one shard

// BETTER: Hashed monotonic field (distributes writes)
sh.shardCollection("mydb.events", { _id: "hashed" })
// Result: Even distribution, but loses range query efficiency

// GOOD: High cardinality field that appears in queries
sh.shardCollection("mydb.orders", { customer_id: 1 })
// Result: Good if customers have similar order volumes

// BEST: Compound key for multi-tenant with time range queries
sh.shardCollection("mydb.events", { tenant_id: 1, created_at: 1 })
// Result: Tenant isolation + range queries within tenant
```

### Hot Partition Visualization

```mermaid
graph TB
    subgraph "Before: Monotonic Shard Key (timestamp)"
        S1A[Shard 1<br/>Old data<br/>0% writes]
        S2A[Shard 2<br/>Older data<br/>0% writes]
        S3A[Shard 3<br/>Recent data<br/>100% writes 🔥]
    end
    
    subgraph "After: Compound Key (tenant_id + timestamp)"
        S1B[Shard 1<br/>Tenants A-F<br/>~33% writes]
        S2B[Shard 2<br/>Tenants G-P<br/>~33% writes]
        S3B[Shard 3<br/>Tenants Q-Z<br/>~33% writes]
    end
```

## 7.2 MongoDB Sharding Architecture

```javascript
// Enable sharding on database
sh.enableSharding("mydb")

// Shard a collection with compound key
sh.shardCollection("mydb.events", { tenant_id: 1, event_time: 1 })

// Check sharding status
sh.status()

// View chunk distribution
db.events.getShardDistribution()

// Manual chunk splitting (rarely needed)
sh.splitAt("mydb.events", { tenant_id: "tenant_500", event_time: ISODate("2024-01-01") })

// Move chunk to specific shard (for rebalancing)
sh.moveChunk("mydb.events", { tenant_id: "tenant_100" }, "shard0002")

// Tag-based sharding (zone sharding)
sh.addShardTag("shard0001", "US")
sh.addShardTag("shard0002", "EU")

sh.addTagRange(
  "mydb.users",
  { region: "us", _id: MinKey },
  { region: "us", _id: MaxKey },
  "US"
)

sh.addTagRange(
  "mydb.users",
  { region: "eu", _id: MinKey },
  { region: "eu", _id: MaxKey },
  "EU"
)
```

### Query Routing

```javascript
// Targeted query (shard key in filter) - goes to one shard
db.events.find({ tenant_id: "tenant_123", event_time: { $gte: startDate } })

// Scatter-gather query (no shard key) - goes to all shards
db.events.find({ event_type: "login" })  // Must query all shards

// Covered query on sharded collection
db.events.createIndex({ tenant_id: 1, event_type: 1, event_time: -1 })
db.events.find(
  { tenant_id: "tenant_123", event_type: "login" },
  { event_time: 1, _id: 0 }  // Projection uses only indexed fields
)
```

## 7.3 Redis Cluster Sharding

```redis
# Create cluster (using redis-cli)
redis-cli --cluster create \
  node1:6379 node2:6379 node3:6379 \
  node4:6379 node5:6379 node6:6379 \
  --cluster-replicas 1

# Check cluster health
redis-cli --cluster check node1:6379

# Reshard (move slots between nodes)
redis-cli --cluster reshard node1:6379

# Add new node
redis-cli --cluster add-node new_node:6379 existing_node:6379

# Rebalance slots across nodes
redis-cli --cluster rebalance node1:6379 --cluster-use-empty-masters
```

### Client-Side Routing

```python
# Python with redis-py-cluster
from redis.cluster import RedisCluster

# Cluster-aware client handles routing automatically
rc = RedisCluster(
    host='node1',
    port=6379,
    decode_responses=True,
    skip_full_coverage_check=True
)

# Client routes to correct node based on key hash
rc.set('user:123:profile', '{"name": "Alice"}')  # Routes to node for slot
rc.get('user:123:profile')  # Routes to same node

# Multi-key operations require hash tags
rc.mset({
    '{user:123}:profile': '{"name": "Alice"}',
    '{user:123}:settings': '{"theme": "dark"}'
})
```

---

# Part VIII: TTL & Data Lifecycle Management

## 8.1 TTL Patterns

```mermaid
flowchart LR
    subgraph "Data Lifecycle with TTL"
        A[Event Created] --> B[Active Data<br/>Hot Storage]
        B -->|TTL Expires| C{Archive?}
        C -->|Yes| D[Cold Storage<br/>S3/Glacier]
        C -->|No| E[Delete]
        D -->|Compliance Period| F[Permanent Delete]
    end
```

### MongoDB TTL Indexes

```javascript
// Basic TTL: delete documents 90 days after created_at
db.events.createIndex(
  { created_at: 1 },
  { expireAfterSeconds: 7776000 }  // 90 days in seconds
)

// TTL based on explicit expiration field
db.sessions.createIndex(
  { expires_at: 1 },
  { expireAfterSeconds: 0 }  // Delete when expires_at is reached
)

// Document with explicit expiration
db.sessions.insertOne({
  session_id: "abc123",
  user_id: "user_456",
  data: { ... },
  expires_at: new Date(Date.now() + 3600000)  // 1 hour from now
})

// Different TTL for different document types (using partial index)
// Standard events: 90 days
db.events.createIndex(
  { created_at: 1 },
  { 
    expireAfterSeconds: 7776000,
    partialFilterExpression: { type: { $ne: "audit" } }
  }
)

// Audit events: 365 days (separate TTL index)
db.events.createIndex(
  { created_at: 1 },
  { 
    expireAfterSeconds: 31536000,
    partialFilterExpression: { type: "audit" }
  }
)

// Modify TTL on existing index
db.runCommand({
  collMod: "events",
  index: {
    keyPattern: { created_at: 1 },
    expireAfterSeconds: 5184000  // Change to 60 days
  }
})

// Monitor TTL deletions
db.serverStatus().metrics.ttl
// { deletedDocuments: 15420, passes: 287 }
```

### Redis TTL Management

```redis
# Set TTL when creating key
SET session:abc123 "{...}" EX 3600   # Expire in 1 hour
SETEX session:abc123 3600 "{...}"    # Equivalent

# Set TTL on existing key
EXPIRE user:123:cache 300            # Expire in 5 minutes
PEXPIRE user:123:cache 300000        # Expire in 300000 milliseconds

# Set expiration at specific time
EXPIREAT user:123:cache 1705406400   # Unix timestamp
PEXPIREAT user:123:cache 1705406400000  # Millisecond timestamp

# Check remaining TTL
TTL user:123:cache                   # Returns seconds, -1 = no TTL, -2 = doesn't exist
PTTL user:123:cache                  # Returns milliseconds

# Remove TTL (make persistent)
PERSIST user:123:cache

# Sliding window TTL pattern (extend on access)
GET user:123:session
EXPIRE user:123:session 1800         # Reset to 30 minutes on each access

# Atomic get-and-extend
GETEX user:123:session EX 1800       # Get value and set new TTL (Redis 6.2+)
```

### Sliding Window Rate Limiter with TTL

```redis
-- Sliding window rate limiter using sorted set with TTL
-- Key: ratelimit:{user_id}:{action}
-- Score: timestamp, Member: unique request ID

EVAL "
local key = KEYS[1]
local now = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local limit = tonumber(ARGV[3])
local request_id = ARGV[4]

-- Remove old entries outside window
redis.call('ZREMRANGEBYSCORE', key, 0, now - window)

-- Count current requests in window
local count = redis.call('ZCARD', key)

if count >= limit then
    return 0  -- Rate limited
end

-- Add new request
redis.call('ZADD', key, now, request_id)

-- Set TTL on the key (cleanup if no activity)
redis.call('EXPIRE', key, window)

return 1  -- Allowed
" 1 ratelimit:user123:api 1705320000 60000 100 "req-uuid-here"
```

## 8.2 Archival Patterns

```javascript
// MongoDB: Archive before TTL deletion using Change Streams
const pipeline = [
  { $match: { operationType: 'delete' } }
];

const changeStream = db.events.watch(pipeline);

changeStream.on('change', async (change) => {
  // Archive to cold storage before MongoDB TTL deletes
  // Note: TTL deletions appear as 'delete' operations
  await archiveToS3(change.fullDocumentBeforeChange);
});

// Alternative: Pre-emptive archival job
async function archiveExpiringSoon() {
  const threshold = new Date(Date.now() + 86400000); // 24 hours from now
  
  const cursor = db.events.find({
    expires_at: { $lt: threshold },
    archived: { $ne: true }
  });
  
  for await (const doc of cursor) {
    await archiveToS3(doc);
    await db.events.updateOne(
      { _id: doc._id },
      { $set: { archived: true } }
    );
  }
}
```

---

# Part IX: Operational Considerations

## 9.1 Capacity Planning

### MongoDB Sizing

```
Storage Calculation:
─────────────────────
Document size (avg): 2 KB
Documents per day: 100,000,000
Retention period: 90 days
Index overhead: 20%
Replication factor: 3

Raw storage = 2 KB × 100M × 90 = 18 TB
With indexes = 18 TB × 1.2 = 21.6 TB
With replication = 21.6 TB × 3 = 64.8 TB total cluster

Per shard (4 shards) = 64.8 TB / 4 = 16.2 TB per shard
Per node (3 per shard) = 5.4 TB per node

Memory (Working Set):
────────────────────
Hot data (last 7 days) = 2 KB × 100M × 7 = 1.4 TB
Indexes for hot data ≈ 280 GB
Target: 50% of working set in RAM = 840 GB across cluster
Per shard = 210 GB, Per node ≈ 70 GB RAM
```

### Redis Sizing

```
Memory Calculation:
──────────────────
Key overhead: ~50 bytes per key
Value overhead: varies by data structure

Example: User sessions
- Keys: 1,000,000 active sessions
- Key pattern: "session:{uuid}" = ~48 bytes
- Value: JSON blob avg 500 bytes
- Per-key overhead: ~50 bytes

Per session


**User**
Continue


**Anthropic.claude Opus 4 5**
= 48 + 500 + 50 = ~600 bytes
Total = 1,000,000 × 600 = 600 MB

Add 30% buffer for fragmentation = 780 MB
With replication (1 replica) = 1.56 GB total

Example: Real-time counters (sorted sets)
- 10,000 tenants
- 100 event types per tenant
- Sorted set with 1000 members each = ~50 KB per set
Total = 10,000 × 100 × 50 KB = 50 GB
With replication = 100 GB total
```

## 9.2 Monitoring Key Metrics

### MongoDB Metrics

```javascript
// Server status overview
db.serverStatus()

// Key metrics to monitor:
// 1. Operation counters
db.serverStatus().opcounters
// { insert: 1523456, query: 8745123, update: 234567, delete: 45678 }

// 2. Connections
db.serverStatus().connections
// { current: 145, available: 51055, totalCreated: 28456 }

// 3. Memory usage
db.serverStatus().mem
// { resident: 4096, virtual: 8192, mapped: 0 }

// 4. Replication lag
rs.printSecondaryReplicationInfo()
// source: mongo2:27017
//     syncedTo: Mon Jan 15 2024 10:30:00 GMT+0000
//     0 secs (0 hrs) behind the primary

// 5. Slow queries
db.setProfilingLevel(1, { slowms: 100 })  // Log queries > 100ms
db.system.profile.find().sort({ ts: -1 }).limit(10)

// 6. Index usage
db.orders.aggregate([{ $indexStats: {} }])

// 7. Collection stats
db.events.stats()
// { size: 1073741824, count: 5000000, avgObjSize: 214, storageSize: 536870912 }
```

### Redis Metrics

```redis
# Overall info
INFO

# Memory metrics
INFO memory
# used_memory: 1073741824
# used_memory_human: 1.00G
# used_memory_peak: 1288490188
# mem_fragmentation_ratio: 1.05

# Client connections
INFO clients
# connected_clients: 145
# blocked_clients: 2

# Persistence status
INFO persistence
# rdb_last_save_time: 1705320000
# aof_last_rewrite_time_sec: 45

# Replication
INFO replication
# role: master
# connected_slaves: 2
# slave0: ip=10.0.0.2,port=6379,state=online,offset=12345678,lag=0

# Command stats
INFO commandstats
# cmdstat_get: calls=1000000,usec=500000,usec_per_call=0.50
# cmdstat_set: calls=500000,usec=300000,usec_per_call=0.60

# Slow log
SLOWLOG GET 10
CONFIG SET slowlog-log-slower-than 10000  # Log commands > 10ms

# Memory analysis
MEMORY DOCTOR
MEMORY STATS

# Big keys (run carefully, can be slow)
redis-cli --bigkeys
```

### Alert Thresholds

| Metric | Warning | Critical | Action |
|--------|---------|----------|--------|
| MongoDB replication lag | > 10 sec | > 60 sec | Check network, oplog size |
| MongoDB connections | > 80% max | > 90% max | Scale or fix connection leaks |
| MongoDB query time (p99) | > 100ms | > 500ms | Add indexes, optimize queries |
| Redis memory usage | > 70% | > 85% | Scale or evict data |
| Redis connected clients | > 5000 | > 8000 | Check connection pooling |
| Redis replication lag | > 1 sec | > 5 sec | Check network, reduce write rate |

## 9.3 Backup and Restore

### MongoDB Backup Strategies

```bash
# mongodump (logical backup)
mongodump --uri="mongodb://user:pass@host:27017/mydb" \
  --archive=backup-2024-01-15.archive \
  --gzip

# Restore from dump
mongorestore --uri="mongodb://user:pass@host:27017/mydb" \
  --archive=backup-2024-01-15.archive \
  --gzip \
  --drop  # Drop existing collections first

# Point-in-time recovery with oplog
mongodump --uri="mongodb://host:27017/mydb" \
  --oplog \
  --archive=backup-with-oplog.archive

mongorestore --archive=backup-with-oplog.archive \
  --oplogReplay \
  --oplogLimit="1705320000:1"  # Timestamp to recover to

# Filesystem snapshot (requires journaling)
# 1. Lock writes
db.fsyncLock()
# 2. Take filesystem/volume snapshot
# 3. Unlock
db.fsyncUnlock()
```

### Redis Backup Strategies

```redis
# Trigger RDB snapshot
BGSAVE
# Check status
LASTSAVE

# Copy RDB file while Redis running
# Redis writes to temp file, then renames atomically
cp /var/lib/redis/dump.rdb /backup/redis-backup-$(date +%Y%m%d).rdb

# AOF backup - just copy the file
cp /var/lib/redis/appendonly.aof /backup/

# Restore: Stop Redis, replace files, start Redis
systemctl stop redis
cp /backup/dump.rdb /var/lib/redis/
systemctl start redis
```

## 9.4 Schema Migrations

```javascript
// MongoDB: Schema versioning pattern
// Add schema_version to documents
{
  _id: ObjectId("..."),
  schema_version: 2,
  name: "Alice Chen",  // v2: split from full_name in v1
  email: "alice@example.com",
  // ... other fields
}

// Migration script: v1 to v2
async function migrateV1ToV2() {
  const cursor = db.users.find({ 
    schema_version: { $exists: false } // or schema_version: 1
  });
  
  let batch = [];
  const BATCH_SIZE = 1000;
  
  for await (const doc of cursor) {
    const nameParts = doc.full_name.split(' ');
    batch.push({
      updateOne: {
        filter: { _id: doc._id },
        update: {
          $set: {
            first_name: nameParts[0],
            last_name: nameParts.slice(1).join(' '),
            schema_version: 2
          },
          $unset: { full_name: "" }
        }
      }
    });
    
    if (batch.length >= BATCH_SIZE) {
      await db.users.bulkWrite(batch);
      batch = [];
    }
  }
  
  if (batch.length > 0) {
    await db.users.bulkWrite(batch);
  }
}

// Application code handles both versions during migration
function normalizeUser(doc) {
  if (!doc.schema_version || doc.schema_version < 2) {
    const parts = doc.full_name.split(' ');
    return {
      ...doc,
      first_name: parts[0],
      last_name: parts.slice(1).join(' ')
    };
  }
  return doc;
}
```

---

# Part X: Case Studies

## Case Study 1: Hot Partition Causing Write Throttling

**Symptoms:** DynamoDB table showing throttled writes, ProvisionedThroughputExceededException errors spiking at midnight UTC.

**Root Cause Analysis:**
```
Partition key: date (YYYY-MM-DD format)
At midnight, all writes shifted to new partition key
Single partition receiving 100% of write traffic
```

**Solution:**
```javascript
// Before: date as partition key
{ 
  PK: "2024-01-15", 
  SK: "event#12345",
  // ...
}

// After: Add write sharding suffix
{
  PK: "2024-01-15#3",  // Random suffix 0-9 distributes across 10 partitions
  SK: "event#12345",
  // ...
}

// Application code
function getPartitionKey(date) {
  const shard = Math.floor(Math.random() * 10);
  return `${date}#${shard}`;
}

// Reading requires scatter-gather across all shards
async function getEventsForDate(date) {
  const queries = [];
  for (let shard = 0; shard < 10; shard++) {
    queries.push(queryPartition(`${date}#${shard}`));
  }
  const results = await Promise.all(queries);
  return results.flat().sort((a, b) => a.timestamp - b.timestamp);
}
```

**Outcome:** Write throttling eliminated. Peak write throughput increased from 1,000 to 10,000 WCU. Read latency increased slightly (10 parallel queries vs 1) but remained under SLA.

---

## Case Study 2: Stale Reads from Replication Lag

**Symptoms:** Users updating profile, then seeing old data on next page load. Support tickets about "changes not saving."

**Root Cause Analysis:**
```javascript
// Write to primary
await db.users.updateOne({ _id: userId }, { $set: { name: "New Name" } });

// Immediate read from secondary (read preference: secondaryPreferred)
const user = await db.users.findOne({ _id: userId });
// Returns old name due to replication lag (50-200ms typical)
```

**Solution:**
```javascript
// Solution 1: Read from primary after write (simple)
class UserService {
  async updateAndGet(userId, updates) {
    await this.db.users.updateOne(
      { _id: userId },
      { $set: updates },
      { writeConcern: { w: "majority" } }
    );
    
    // Force read from primary
    return this.db.users.findOne(
      { _id: userId },
      { readPreference: "primary" }
    );
  }
}

// Solution 2: Causal consistency (MongoDB 3.6+)
const session = client.startSession({ causalConsistency: true });

await db.users.updateOne(
  { _id: userId },
  { $set: updates },
  { session }
);

// Subsequent reads in same session see the write
const user = await db.users.findOne({ _id: userId }, { session });

session.endSession();

// Solution 3: Client-side caching with write-through
class CachedUserService {
  constructor(db, redis) {
    this.db = db;
    this.redis = redis;
  }
  
  async update(userId, updates) {
    const user = await this.db.users.findOneAndUpdate(
      { _id: userId },
      { $set: updates },
      { returnDocument: 'after', writeConcern: { w: "majority" } }
    );
    
    // Update cache immediately
    await this.redis.set(
      `user:${userId}`,
      JSON.stringify(user.value),
      'EX', 3600
    );
    
    return user.value;
  }
  
  async get(userId) {
    // Try cache first
    const cached = await this.redis.get(`user:${userId}`);
    if (cached) return JSON.parse(cached);
    
    // Fall back to database
    const user = await this.db.users.findOne({ _id: userId });
    if (user) {
      await this.redis.set(`user:${userId}`, JSON.stringify(user), 'EX', 3600);
    }
    return user;
  }
}
```

**Outcome:** Read-your-writes consistency achieved. User complaints eliminated. Cache hit rate of 85% also reduced database read load.

---

## Case Study 3: Unbounded Collection Growth

**Symptoms:** MongoDB storage growing 50GB/day. Disk space alerts firing weekly. Queries slowing as collection size increased.

**Root Cause Analysis:**
```javascript
// Events collection had no TTL
// Documents inserted but never deleted
// 18 months of data: 2 billion documents, 4TB storage
db.events.stats()
// { count: 2000000000, size: 4398046511104, avgObjSize: 2199 }
```

**Solution:**
```javascript
// Step 1: Add TTL index for new data
db.events.createIndex(
  { created_at: 1 },
  { expireAfterSeconds: 7776000 }  // 90 days
);

// Step 2: Batch delete old data (TTL won't retroactively delete quickly)
async function deleteOldEvents() {
  const cutoff = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
  
  let totalDeleted = 0;
  let deleted;
  
  do {
    // Delete in small batches to avoid long locks
    const result = await db.events.deleteMany(
      { created_at: { $lt: cutoff } },
      { limit: 10000 }  // MongoDB 5.0+ supports limit on deleteMany
    );
    deleted = result.deletedCount;
    totalDeleted += deleted;
    
    console.log(`Deleted ${totalDeleted} documents...`);
    
    // Pause between batches to reduce impact
    await new Promise(resolve => setTimeout(resolve, 100));
  } while (deleted > 0);
}

// Step 3: Compact collection to reclaim space (schedule during low traffic)
db.runCommand({ compact: "events" });
```

**Outcome:** Storage reduced from 4TB to 400GB. Query performance improved 10x. Monthly storage costs reduced by $3,000.

---

## Case Study 4: Cache Stampede Under Load

**Symptoms:** Redis CPU spikes to 100% during traffic peaks. Application latency increases 5x. Database connections exhausted.

**Root Cause Analysis:**
```javascript
// Naive caching pattern
async function getProduct(productId) {
  const cached = await redis.get(`product:${productId}`);
  if (cached) return JSON.parse(cached);
  
  // Cache miss - many concurrent requests hit database
  const product = await db.products.findOne({ _id: productId });
  await redis.set(`product:${productId}`, JSON.stringify(product), 'EX', 3600);
  return product;
}

// Popular product cache expires
// 1000 concurrent requests all miss cache
// 1000 database queries + 1000 cache writes
// Database overloaded, Redis CPU spikes from writes
```

**Solution:**
```javascript
// Solution 1: Mutex/lock pattern
const locks = new Map();

async function getProductWithLock(productId) {
  const cacheKey = `product:${productId}`;
  const lockKey = `lock:product:${productId}`;
  
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);
  
  // Try to acquire lock
  const acquired = await redis.set(lockKey, '1', 'NX', 'EX', 5);
  
  if (acquired) {
    try {
      // Double-check cache (another request might have populated it)
      const cached2 = await redis.get(cacheKey);
      if (cached2) return JSON.parse(cached2);
      
      // Fetch from database
      const product = await db.products.findOne({ _id: productId });
      await redis.set(cacheKey, JSON.stringify(product), 'EX', 3600);
      return product;
    } finally {
      await redis.del(lockKey);
    }
  } else {
    // Wait and retry
    await new Promise(resolve => setTimeout(resolve, 50));
    return getProductWithLock(productId);
  }
}

// Solution 2: Probabilistic early expiration
async function getProductWithEarlyExpire(productId) {
  const c


**User**
continue


**Anthropic.claude Opus 4 5**
acheKey = `product:${productId}`;
  
  const result = await redis.get(cacheKey);
  if (result) {
    const { data, expiry, delta } = JSON.parse(result);
    const now = Date.now();
    
    // Probabilistic early recomputation
    // As expiry approaches, probability of refresh increases
    const ttl = expiry - now;
    const beta = 1;  // Tuning parameter
    const random = Math.random();
    const shouldRefresh = ttl <= delta * beta * Math.log(random) * -1;
    
    if (!shouldRefresh) {
      return data;
    }
    // Fall through to refresh
  }
  
  const product = await db.products.findOne({ _id: productId });
  const cacheData = {
    data: product,
    expiry: Date.now() + 3600000,  // 1 hour
    delta: 60000  // Recomputation window: 1 minute
  };
  await redis.set(cacheKey, JSON.stringify(cacheData), 'EX', 3600);
  return product;
}

// Solution 3: Background refresh (best for predictable hot keys)
class BackgroundRefreshCache {
  constructor(redis, db) {
    this.redis = redis;
    this.db = db;
    this.refreshQueue = new Set();
  }
  
  async get(productId) {
    const cacheKey = `product:${productId}`;
    const result = await this.redis.get(cacheKey);
    
    if (result) {
      const { data, softExpiry } = JSON.parse(result);
      
      // If past soft expiry, trigger background refresh
      if (Date.now() > softExpiry && !this.refreshQueue.has(productId)) {
        this.refreshQueue.add(productId);
        this.refreshInBackground(productId);
      }
      
      // Return stale data immediately
      return data;
    }
    
    // True cache miss - must wait
    return this.refreshSync(productId);
  }
  
  async refreshInBackground(productId) {
    try {
      await this.refreshSync(productId);
    } finally {
      this.refreshQueue.delete(productId);
    }
  }
  
  async refreshSync(productId) {
    const product = await this.db.products.findOne({ _id: productId });
    const cacheData = {
      data: product,
      softExpiry: Date.now() + 3000000,  // 50 minutes soft
    };
    await this.redis.set(
      `product:${productId}`,
      JSON.stringify(cacheData),
      'EX', 3600  // 60 minutes hard
    );
    return product;
  }
}
```

**Outcome:** Database connection spikes eliminated. P99 latency reduced from 2s to 50ms during cache refresh. Redis CPU remained stable under 40%.

---

## Case Study 5: Data Loss from Improper Redis Persistence

**Symptoms:** After Redis server restart due to OS update, all user sessions were lost. 50,000 users forced to re-login. Shopping carts abandoned.

**Root Cause Analysis:**
```redis
# Redis configuration
appendonly no           # AOF disabled
save ""                 # RDB disabled (someone disabled for "performance")

# Result: No persistence at all
# All data existed only in memory
# Server restart = complete data loss
```

**Solution:**
```redis
# Enable AOF with fsync every second (balance of durability and performance)
CONFIG SET appendonly yes
CONFIG SET appendfsync everysec

# Enable RDB snapshots as backup
CONFIG SET save "900 1 300 10 60 10000"

# Persist configuration
CONFIG REWRITE

# For critical data like sessions, use Redis with Sentinel or Cluster
# Plus application-level resilience
```

```javascript
// Application-level session resilience
class ResilientSessionStore {
  constructor(redis, db) {
    this.redis = redis;
    this.db = db;
  }
  
  async getSession(sessionId) {
    // Try Redis first
    try {
      const session = await this.redis.get(`session:${sessionId}`);
      if (session) return JSON.parse(session);
    } catch (error) {
      console.warn('Redis unavailable, falling back to DB');
    }
    
    // Fall back to database
    const dbSession = await this.db.sessions.findOne({ _id: sessionId });
    if (dbSession) {
      // Restore to Redis
      await this.redis.set(
        `session:${sessionId}`,
        JSON.stringify(dbSession),
        'EX', 3600
      ).catch(() => {}); // Don't fail if Redis is down
    }
    return dbSession;
  }
  
  async setSession(sessionId, data) {
    // Write to both Redis and database
    const session = { _id: sessionId, ...data, updated_at: new Date() };
    
    await Promise.all([
      this.redis.set(`session:${sessionId}`, JSON.stringify(session), 'EX', 3600),
      this.db.sessions.updateOne(
        { _id: sessionId },
        { $set: session },
        { upsert: true }
      )
    ]);
  }
}
```

**Outcome:** Implemented AOF persistence with hourly RDB snapshots. Added database-backed session storage as fallback. Subsequent Redis restarts showed zero session loss.

---

## Case Study 6: Cross-Shard Query Timeout

**Symptoms:** Product search queries timing out after 30 seconds. Database logs showing scatter-gather across 12 shards. User experience severely degraded.

**Root Cause Analysis:**
```javascript
// Sharded on product_id (hash)
sh.shardCollection("catalog.products", { product_id: "hashed" })

// Search query by category + price range
db.products.find({
  category: "electronics",
  price: { $gte: 100, $lte: 500 },
  in_stock: true
}).sort({ rating: -1 }).limit(20)

// No shard key in query = scatter-gather
// Query goes to all 12 shards
// Each shard scans, sorts, returns results
// Mongos merges and re-sorts
// With 50M products, each shard scan takes 3-5 seconds
```

**Solution:**
```javascript
// Solution 1: Add targeted indexes for common queries
db.products.createIndex({
  category: 1,
  in_stock: 1,
  price: 1,
  rating: -1
})

// Solution 2: For search, use dedicated search infrastructure
// Elasticsearch/Atlas Search for full-text and faceted search

// Solution 3: Consider category-based sharding if queries are category-centric
sh.shardCollection("catalog.products", { category: 1, product_id: 1 })

// Solution 4: Maintain search-optimized collection
// Denormalized, smaller documents, fewer shards
{
  _id: productId,
  category: "electronics",
  subcategory: "phones",
  brand: "Samsung",
  price: 299,
  rating: 4.5,
  in_stock: true,
  // Minimal fields for search
}

// Solution 5: Caching layer for popular queries
async function searchProducts(filters, sort, limit) {
  const cacheKey = `search:${hashFilters(filters)}:${sort}:${limit}`;
  
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);
  
  const results = await db.products.find(filters)
    .sort(sort)
    .limit(limit)
    .toArray();
  
  // Cache for 5 minutes
  await redis.set(cacheKey, JSON.stringify(results), 'EX', 300);
  
  return results;
}
```

**Outcome:** Added compound indexes reduced per-shard query time from 3s to 50ms. Total query time reduced from 30s to 600ms. Implemented Elasticsearch for complex search, keeping MongoDB for transactional operations.

---

# Part XI: Common Mistakes & Fixes

## Mistake 1: Treating MongoDB Like a Relational Database

**The anti-pattern:**
```javascript
// Over-normalized schema (relational thinking)
// Users collection
{ _id: "user_123", name: "Alice", email: "alice@example.com" }

// Addresses collection
{ _id: "addr_1", user_id: "user_123", type: "home", street: "123 Main St" }
{ _id: "addr_2", user_id: "user_123", type: "work", street: "456 Office Blvd" }

// Preferences collection
{ _id: "pref_1", user_id: "user_123", key: "theme", value: "dark" }
{ _id: "pref_2", user_id: "user_123", key: "language", value: "en" }

// Getting a user profile requires 3 queries + application-side joins
const user = await db.users.findOne({ _id: userId });
const addresses = await db.addresses.find({ user_id: userId }).toArray();
const preferences = await db.preferences.find({ user_id: userId }).toArray();
// Then merge in application code
```

**Detection:**
```javascript
// High $lookup usage in aggregations
db.system.profile.find({ "command.pipeline.0.$lookup": { $exists: true } }).count()

// Multiple sequential queries for related data
// Check application logs for query patterns

// Slow query log showing many small queries
db.setProfilingLevel(1, { slowms: 10 });
```

**The fix:**
```javascript
// Embedded document (NoSQL thinking)
{
  _id: "user_123",
  name: "Alice",
  email: "alice@example.com",
  addresses: [
    { type: "home", street: "123 Main St", city: "Seattle", zip: "98101" },
    { type: "work", street: "456 Office Blvd", city: "Seattle", zip: "98102" }
  ],
  preferences: {
    theme: "dark",
    language: "en",
    notifications: true
  }
}

// Single query returns everything
const user = await db.users.findOne({ _id: userId });
```

---

## Mistake 2: Wrong Shard Key Selection

**The anti-pattern:**
```javascript
// Choosing shard key based on uniqueness alone
sh.shardCollection("logs.events", { event_id: "hashed" })

// Query patterns all include tenant_id
db.events.find({ tenant_id: "tenant_123", timestamp: { $gte: start } })

// Result: Every query is scatter-gather across all shards
// event_id provides uniqueness but isn't in queries
```

**Detection:**
```javascript
// Check for scatter-gather queries
db.events.find({ tenant_id: "tenant_123" }).explain("executionStats")
// Look for: "shards": [...all shards listed...]

// Monitor mongos for scatter-gather percentage
db.adminCommand({ serverStatus: 1 }).shardingStatistics
```

**The fix:**
```javascript
// Shard key should match query patterns
sh.shardCollection("logs.events", { tenant_id: 1, timestamp: 1 })

// Now queries are targeted to specific shard(s)
db.events.find({ tenant_id: "tenant_123", timestamp: { $gte: start } })
// Only hits shard(s) containing tenant_123 data
```

---

## Mistake 3: Ignoring Read/Write Concerns

**The anti-pattern:**
```javascript
// Default write concern (w: 1) for critical financial data
await db.transactions.insertOne({
  from_account: "acc_123",
  to_account: "acc_456",
  amount: 10000,
  timestamp: new Date()
});
// Primary acknowledges, but crashes before replicating
// Data is lost, transaction not recorded
```

**Detection:**
```javascript
// Audit code for missing write concerns on critical collections
// Check for rollbacks during failover
rs.printSecondaryReplicationInfo()

// Monitor for write concern errors
db.serverStatus().metrics.repl.network.replSetUpdatePosition
```

**The fix:**
```javascript
// Strong write concern for critical data
await db.transactions.insertOne(
  {
    from_account: "acc_123",
    to_account: "acc_456",
    amount: 10000,
    timestamp: new Date()
  },
  {
    writeConcern: { w: "majority", j: true, wtimeout: 5000 }
  }
);

// Configure default write concern at connection level
const client = new MongoClient(uri, {
  writeConcern: { w: "majority", j: true }
});
```

---

## Mistake 4: Using KEYS Command in Production Redis

**The anti-pattern:**
```redis
# Finding all session keys
KEYS session:*

# With 1 million keys, this blocks Redis for 500ms+
# All other operations queue behind it
# Application timeouts cascade
```

**Detection:**
```redis
# Check slow log for KEYS commands
SLOWLOG GET 100

# Monitor for command execution times
redis-cli --latency-history

# Search codebase for KEYS usage
grep -r "\.keys\(" *.py
```

**The fix:**
```redis
# Use SCAN for iteration (cursor-based, non-blocking)
SCAN 0 MATCH session:* COUNT 100
# Returns cursor and batch of keys
# Continue with returned cursor until cursor is 0

# Better: Use sets to track keys if you need to iterate
SADD session:active "session:abc123" "session:def456" ...
SMEMBERS session:active  # Get all session IDs

# Even better: Design to avoid key iteration
# Use TTL for cleanup instead of manual iteration
```

```python
# Python SCAN pattern
def scan_keys(redis_client, pattern, count=100):
    cursor = 0
    while True:
        cursor, keys = redis_client.scan(cursor, match=pattern, count=count)
        for key in keys:
            yield key
        if cursor == 0:
            break

# Usage
for session_key in scan_keys(redis, "session:*"):
    process_session(session_key)
```

---

## Mistake 5: Too Many Indexes in MongoDB

**The anti-pattern:**
```javascript
// Index for every possible query (relational database thinking)
db.products.createIndex({ name: 1 })
db.products.createIndex({ category: 1 })
db.products.createIndex({ price: 1 })
db.products.createIndex({ brand: 1 })
db.products.createIndex({ created_at: 1 })
db.products.createIndex({ category: 1, name: 1 })
db.products.createIndex({ category: 1, price: 1 })
db.products.createIndex({ brand: 1, price: 1 })
// ... 15 more indexes

// Result: Every write updates 20+ indexes
// Write performance degrades 10x
// Index storage exceeds data storage
```

**Detection:**
```javascript
// List all indexes and their sizes
db.products.stats().indexSizes

// Check index usage
db.products.aggregate([{ $indexStats: {} }])
// Look for indexes with zero or low ops

// Monitor write latency
db.serverStatus().opcounters  // High update latency
```

**The fix:**
```javascript
// Analyze actual query patterns
// Use compound indexes that cover multiple queries
// Remove unused indexes

// Compound index covering multiple query patterns
db.products.createIndex({ 
  category: 1,     // Equality filter
  brand: 1,        // Equality filter  
  price: 1,        // Range filter
  created_at: -1   // Sort
})

// This single index supports:
// - find({ category: "x" })
// - find({ category: "x", brand: "y" })
// - find({ category: "x", brand: "y", price: { $lt: 100 } })
// - find({ category: "x" }).sort({ created_at: -1 })

// Drop unused indexes
db.products.dropIndex("name_1")
db.products.dropIndex("brand_1


**User**
continue


**Anthropic.claude Opus 4 5**
")

// Check write amplification improved
db.serverStatus().metrics.document
// insertedCount, updatedCount should have better throughput
```

---

## Mistake 6: Storing Large Objects in Redis

**The anti-pattern:**
```redis
# Storing 5MB JSON blobs
SET report:daily:2024-01-15 "{... 5MB of JSON data ...}"

# Problems:
# 1. Single-threaded Redis blocks during large value operations
# 2. Memory fragmentation increases
# 3. Replication lag spikes when large values sync
# 4. Client timeout during retrieval
```

**Detection:**
```redis
# Find large keys
redis-cli --bigkeys

# Check memory fragmentation
INFO memory
# mem_fragmentation_ratio > 1.5 indicates problems

# Monitor slow log for large value operations
SLOWLOG GET 20
```

**The fix:**
```javascript
// Option 1: Store in MongoDB/S3, cache metadata in Redis
// Redis stores reference
await redis.set('report:daily:2024-01-15', JSON.stringify({
  s3_key: 'reports/daily/2024-01-15.json',
  generated_at: Date.now(),
  size_bytes: 5242880
}), 'EX', 86400);

// Application fetches from S3 when needed
async function getReport(date) {
  const meta = JSON.parse(await redis.get(`report:daily:${date}`));
  if (!meta) return null;
  return await s3.getObject({ Key: meta.s3_key }).promise();
}

// Option 2: Chunk large values
async function setLargeValue(key, value, chunkSize = 500000) {
  const chunks = [];
  for (let i = 0; i < value.length; i += chunkSize) {
    chunks.push(value.slice(i, i + chunkSize));
  }
  
  const pipeline = redis.pipeline();
  chunks.forEach((chunk, i) => {
    pipeline.set(`${key}:chunk:${i}`, chunk, 'EX', 86400);
  });
  pipeline.set(`${key}:meta`, JSON.stringify({ 
    chunks: chunks.length, 
    totalSize: value.length 
  }), 'EX', 86400);
  
  await pipeline.exec();
}

async function getLargeValue(key) {
  const meta = JSON.parse(await redis.get(`${key}:meta`));
  if (!meta) return null;
  
  const keys = Array.from({ length: meta.chunks }, (_, i) => `${key}:chunk:${i}`);
  const chunks = await redis.mget(keys);
  return chunks.join('');
}

// Option 3: Use Redis Streams for large datasets
// Stream entries instead of storing as single value
```

---

## Mistake 7: Assuming Eventual Consistency Means "Fast Enough"

**The anti-pattern:**
```javascript
// Write to database
await db.users.updateOne(
  { _id: userId },
  { $set: { email_verified: true } }
);

// Immediately check in another service (reading from replica)
const user = await db.users.findOne(
  { _id: userId },
  { readPreference: 'secondary' }
);

if (!user.email_verified) {
  // Still sees old value!
  // Send "please verify" email again
  // User confused, support tickets
}
```

**Detection:**
```javascript
// Monitor replication lag
rs.printSecondaryReplicationInfo()

// Log read-after-write patterns in application
// Track "stale read" incidents

// Check for "impossible" states in business logic
// e.g., order created but immediately shows as not found
```

**The fix:**
```javascript
// Solution 1: Causal consistency sessions
const session = client.startSession({ causalConsistency: true });

await db.users.updateOne(
  { _id: userId },
  { $set: { email_verified: true } },
  { session }
);

// Same session guarantees read-your-writes
const user = await db.users.findOne({ _id: userId }, { session });
// email_verified is guaranteed to be true

session.endSession();

// Solution 2: Pass state through the request
async function verifyEmail(userId) {
  await db.users.updateOne(
    { _id: userId },
    { $set: { email_verified: true } }
  );
  
  // Return verified state to caller
  // Don't re-read from database
  return { email_verified: true };
}

// Solution 3: Event-driven architecture
// Write triggers event; downstream services react to event, not to polling
await db.users.updateOne(
  { _id: userId },
  { $set: { email_verified: true } }
);

// Emit event
await eventBus.publish('user.email.verified', { userId });

// Other services subscribe and react
// No polling, no consistency issues
```

---

# Part XII: Decision Frameworks & Checklists

## Database Selection Checklist

```
┌─────────────────────────────────────────────────────────────────┐
│                   DATABASE SELECTION MATRIX                      │
├─────────────────────────────────────────────────────────────────┤
│ Requirement                    │ Best Fit                       │
├────────────────────────────────┼────────────────────────────────┤
│ Complex transactions           │ PostgreSQL, MySQL              │
│ Ad-hoc queries needed          │ PostgreSQL, MongoDB            │
│ High write throughput          │ Cassandra, ScyllaDB            │
│ Flexible schema                │ MongoDB, Couchbase             │
│ Key-value access patterns      │ Redis, DynamoDB                │
│ Graph traversals               │ Neo4j, Neptune                 │
│ Time-series data               │ TimescaleDB, InfluxDB          │
│ Full-text search               │ Elasticsearch, MongoDB Atlas   │
│ Global distribution            │ CockroachDB, Cosmos DB, Spanner│
│ Caching layer                  │ Redis, Memcached               │
│ Event streaming                │ Kafka, Redis Streams           │
└─────────────────────────────────────────────────────────────────┘
```

## Access Pattern Documentation Template

```markdown
## Access Pattern: [Name]

**ID:** AP-001
**Description:** Retrieve user profile with recent activity

**Query:**
```javascript
db.users.findOne(
  { _id: userId },
  { projection: { password: 0 } }
)
```

**Frequency:** 10,000 requests/second peak
**Latency SLA:** p99 < 20ms
**Consistency Requirement:** Read-your-writes for authenticated user
**Data Freshness:** Can be 5 seconds stale for other users

**Required Indexes:**
- `{ _id: 1 }` (default)

**Caching Strategy:**
- Redis cache with 5-minute TTL
- Invalidate on profile update

**Sharding Implications:**
- _id as shard key supports this pattern
```

## Shard Key Selection Worksheet

```markdown
## Shard Key Analysis: [Collection Name]

### Candidate Keys

| Candidate | Cardinality | Frequency Distribution | Monotonic? | In Queries? |
|-----------|-------------|------------------------|------------|-------------|
| user_id   | 10M+ | Even | No | Yes (80%) |
| timestamp | Infinite | N/A | Yes ❌ | Yes (60%) |
| region    | 12 | Skewed (US=60%) ❌ | No | Yes (40%) |
| {user_id, timestamp} | Very High | Even | No | Yes |

### Query Pattern Coverage

| Access Pattern | user_id | timestamp | region | {user_id, ts} |
|----------------|---------|-----------|--------|---------------|
| Get user events | ✓ Targeted | ✗ Scatter | ✗ Scatter | ✓ Targeted |
| Events by time range | ✗ Scatter | ✓ Range | ✗ Scatter | ⚠️ Scatter |
| Events by region | ✗ Scatter | ✗ Scatter | ✓ Targeted | ✗ Scatter |

### Hot Partition Risk Assessment

- **user_id alone:** Low risk if user activity is distributed
- **timestamp alone:** HIGH RISK - monotonic creates hot spot
- **region alone:** MEDIUM RISK - uneven distribution
- **{user_id, timestamp}:** LOW RISK - compound distributes well

### Recommendation

**Selected Key:** `{ user_id: 1, timestamp: 1 }`

**Justification:**
1. High cardinality from user_id
2. Non-monotonic (different users write simultaneously)
3. Supports primary query pattern (user's events)
4. Timestamp allows range queries within user's data

**Trade-offs Accepted:**
- Cross-user time range queries require scatter-gather
- Mitigated by: Adding region indexes for regional analytics
```

## Consistency Level Decision Matrix

```
┌──────────────────────────────────────────────────────────────────────────┐
│                    CONSISTENCY LEVEL DECISION MATRIX                      │
├───────────────────────────┬──────────────────┬───────────────────────────┤
│ Operation Type            │ Consistency      │ Rationale                 │
├───────────────────────────┼──────────────────┼───────────────────────────┤
│ Financial transactions    │ Strong           │ Money can't be wrong      │
│ User authentication       │ Strong           │ Security critical         │
│ Session creation          │ Strong           │ Must see immediately      │
│ Password changes          │ Strong + Journal │ Security + durability     │
├───────────────────────────┼──────────────────┼───────────────────────────┤
│ Profile reads (own)       │ Read-your-writes │ User expects to see edits │
│ Content publishing        │ Session          │ Author sees changes       │
│ Shopping cart             │ Session          │ User's session consistent │
├───────────────────────────┼──────────────────┼───────────────────────────┤
│ Product catalog           │ Eventual         │ Stale prices OK briefly   │
│ Social feed               │ Eventual         │ Missing post OK briefly   │
│ Analytics queries         │ Eventual         │ Approximate OK            │
│ Search results            │ Eventual         │ Slight delay OK           │
│ Recommendations           │ Eventual         │ Not real-time critical    │
└───────────────────────────┴──────────────────┴───────────────────────────┘
```

---

# Part XIII: Capstone Project — Event Logging Platform

## Business Context

A SaaS platform serving 10,000 customers needs a comprehensive event logging system with the following requirements:

**Scale Requirements:**
- 10,000 tenants (customers)
- Peak write throughput: 100,000 events per second
- Average event size: 1 KB
- Daily volume: ~5 billion events (~5 TB/day raw)
- Retention: 90 days standard, 365 days for audit events

**Access Patterns:**
- Real-time dashboards (events from last 5 minutes)
- User activity timelines (recent events for specific user)
- Security investigations (events matching criteria across time range)
- Aggregate analytics (counts, sums by tenant/event type/time)
- Audit compliance (immutable audit trail access)

**Non-Functional Requirements:**
- Multi-tenant isolation (tenant A cannot see tenant B's data)
- 99.9% availability for writes
- Query latency: p99 < 500ms for targeted queries
- Geographic distribution (US-East primary, US-West DR)

## Architecture Diagram

```mermaid
flowchart TB
    subgraph "Ingestion Layer"
        API[API Gateway]
        LB[Load Balancer]
        ING1[Ingestion Service 1]
        ING2[Ingestion Service 2]
        ING3[Ingestion Service N]
    end
    
    subgraph "Message Queue"
        KAFKA[Kafka Cluster]
    end
    
    subgraph "Processing Layer"
        PROC1[Event Processor 1]
        PROC2[Event Processor 2]
        PROC3[Event Processor N]
        AGG[Aggregation Workers]
    end
    
    subgraph "Storage Layer"
        subgraph "MongoDB Cluster (Sharded)"
            MONGOS[Mongos Routers]
            SHARD1[(Shard 1<br/>Tenants A-C)]
            SHARD2[(Shard 2<br/>Tenants D-M)]
            SHARD3[(Shard 3<br/>Tenants N-S)]
            SHARD4[(Shard 4<br/>Tenants T-Z)]
        end
        
        subgraph "Redis Cluster"
            REDIS1[(Redis 1<br/>Counters)]
            REDIS2[(Redis 2<br/>Cache)]
            REDIS3[(Redis 3<br/>Rate Limits)]
        end
    end
    
    subgraph "Query Layer"
        QUERY1[Query Service 1]
        QUERY2[Query Service 2]
        DASH[Dashboard Service]
    end
    
    API --> LB
    LB --> ING1 & ING2 & ING3
    ING1 & ING2 & ING3 --> KAFKA
    KAFKA --> PROC1 & PROC2 & PROC3
    PROC1 & PROC2 & PROC3 --> MONGOS & REDIS1
    AGG --> MONGOS
    QUERY1 & QUERY2 --> MONGOS & REDIS2
    DASH --> QUERY1 & QUERY2
```

## MongoDB Schema Designs

### Events Collection

```javascript
// Collection: events
// Shard Key: { tenant_id: 1, event_time: 1 }

{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  
  // Shard key components
  tenant_id: "tenant_acme_corp",
  event_time: ISODate("2024-01-15T10:30:45.123Z"),
  
  // Event identification
  event_id: "evt_a1b2c3d4e5f6",  // Client-provided idempotency key
  event_type: "user.login",
  event_version: "1.2",  // Schema version for this event type
  
  // Actor information
  actor: {
    user_id: "user_12345",
    session_id: "sess_abcdef",
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 ..."
  },
  
  // Event-specific payload (varies by event_type)
  payload: {
    login_method: "password",
    mfa_used: true,
    device_fingerprint: "fp_xyz789"
  },
  
  // Context and metadata
  context: {
    request_id: "req_abc123",
    trace_id: "trace_def456",
    environment: "production",
    service: "auth-service",
    service_version: "2.3.1"
  },
  
  // Processing metadata
  metadata: {
    received_at: ISODate("2024-01-15T10:30:45.150Z"),
    processed_at: ISODate("2024-01-15T10:30:45.200Z"),
    source_ip: "10.0.1.50",
    ingestion_node: "ing-prod-03"
  },
  
  // For TTL management
  retention_class: "standard",  // "standard" (90d) or "audit" (365d)
  expires_at: ISODate("2024-04-15T10:30:45.123Z")  // For TTL index
}
```

### Index Definitions

```javascript
// Primary query pattern: tenant events by time range
db.events.createIndex(
  { tenant_id: 1, event_time: -1 },
  { background: true }
)

// User activity timeline


**User**
continue


**Anthropic.claude Opus 4 5**
```javascript
db.events.createIndex(
  { tenant_id: 1, "actor.user_id": 1, event_time: -1 },
  { background: true }
)

// Event type filtering within tenant
db.events.createIndex(
  { tenant_id: 1, event_type: 1, event_time: -1 },
  { background: true }
)

// Security investigations (IP address lookup)
db.events.createIndex(
  { tenant_id: 1, "actor.ip_address": 1, event_time: -1 },
  { background: true }
)

// Idempotency check (prevent duplicate events)
db.events.createIndex(
  { tenant_id: 1, event_id: 1 },
  { unique: true, background: true }
)

// TTL index for standard events (90 days)
db.events.createIndex(
  { expires_at: 1 },
  { expireAfterSeconds: 0, background: true }
)

// Partial index for audit events (different retention)
db.events.createIndex(
  { tenant_id: 1, event_time: -1 },
  { 
    partialFilterExpression: { retention_class: "audit" },
    background: true,
    name: "audit_events_idx"
  }
)
```

### Audit Logs Collection

```javascript
// Collection: audit_logs
// Separate collection for compliance - stricter controls
// Shard Key: { tenant_id: 1, logged_at: 1 }

{
  _id: ObjectId("507f1f77bcf86cd799439012"),
  
  // Shard key components
  tenant_id: "tenant_acme_corp",
  logged_at: ISODate("2024-01-15T10:30:45.123Z"),
  
  // Audit event details
  audit_id: "aud_x1y2z3",
  category: "security",  // security, access, data_change, admin
  action: "permission_granted",
  severity: "high",  // low, medium, high, critical
  
  // Who performed the action
  actor: {
    user_id: "admin_user_001",
    email: "admin@acmecorp.com",
    role: "tenant_admin",
    ip_address: "203.0.113.50"
  },
  
  // What was affected
  target: {
    type: "user",
    id: "user_12345",
    name: "Alice Chen"
  },
  
  // Change details
  changes: {
    field: "role",
    old_value: "viewer",
    new_value: "editor"
  },
  
  // Compliance metadata
  compliance: {
    regulation: ["SOC2", "GDPR"],
    data_classification: "confidential",
    retention_years: 7
  },
  
  // Immutability marker
  hash: "sha256:abc123...",  // Hash of content for integrity verification
  
  // Extended retention
  expires_at: ISODate("2025-01-15T10:30:45.123Z")  // 365 days
}

// Schema validation for audit logs (stricter)
db.createCollection("audit_logs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["tenant_id", "logged_at", "audit_id", "category", "action", "actor"],
      properties: {
        tenant_id: {
          bsonType: "string",
          description: "Tenant identifier - required"
        },
        logged_at: {
          bsonType: "date",
          description: "Timestamp - required"
        },
        category: {
          enum: ["security", "access", "data_change", "admin"],
          description: "Must be valid category"
        },
        severity: {
          enum: ["low", "medium", "high", "critical"]
        },
        actor: {
          bsonType: "object",
          required: ["user_id"],
          properties: {
            user_id: { bsonType: "string" },
            email: { bsonType: "string" },
            ip_address: { bsonType: "string" }
          }
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})

// Write concern for audit logs - maximum durability
// Use in application:
// { writeConcern: { w: "majority", j: true } }
```

### Event Aggregates Collection

```javascript
// Collection: event_aggregates
// Pre-computed rollups using bucket pattern
// Shard Key: { tenant_id: 1, bucket_time: 1 }

{
  _id: ObjectId("507f1f77bcf86cd799439013"),
  
  // Shard key and bucket identification
  tenant_id: "tenant_acme_corp",
  bucket_time: ISODate("2024-01-15T10:00:00Z"),  // Hourly bucket
  bucket_type: "hourly",  // "hourly" or "daily"
  
  // Aggregation dimensions
  dimensions: {
    event_type: "user.login",
    environment: "production"
  },
  
  // Metrics
  metrics: {
    count: 1523,
    unique_users: 892,
    unique_sessions: 1105,
    
    // Distribution by sub-category
    by_login_method: {
      password: 745,
      sso: 623,
      mfa: 155
    },
    
    // Time distribution within bucket
    by_minute: [
      { minute: 0, count: 23 },
      { minute: 1, count: 31 },
      // ... up to minute 59
    ]
  },
  
  // Processing metadata
  last_updated: ISODate("2024-01-15T11:05:00Z"),
  event_ids_sample: ["evt_a1", "evt_b2", "evt_c3"]  // Sample for debugging
}

// Aggregation job (runs every 5 minutes)
async function aggregateHourlyBucket(tenantId, bucketTime) {
  const bucketEnd = new Date(bucketTime.getTime() + 3600000);
  
  const pipeline = [
    {
      $match: {
        tenant_id: tenantId,
        event_time: { $gte: bucketTime, $lt: bucketEnd }
      }
    },
    {
      $group: {
        _id: {
          tenant_id: "$tenant_id",
          event_type: "$event_type",
          environment: "$context.environment"
        },
        count: { $sum: 1 },
        unique_users: { $addToSet: "$actor.user_id" },
        unique_sessions: { $addToSet: "$actor.session_id" },
        sample_events: { $push: "$event_id" }
      }
    },
    {
      $project: {
        _id: 0,
        tenant_id: "$_id.tenant_id",
        bucket_time: bucketTime,
        bucket_type: "hourly",
        dimensions: {
          event_type: "$_id.event_type",
          environment: "$_id.environment"
        },
        metrics: {
          count: "$count",
          unique_users: { $size: "$unique_users" },
          unique_sessions: { $size: "$unique_sessions" }
        },
        event_ids_sample: { $slice: ["$sample_events", 3] },
        last_updated: new Date()
      }
    }
  ];
  
  const results = await db.events.aggregate(pipeline).toArray();
  
  for (const result of results) {
    await db.event_aggregates.updateOne(
      {
        tenant_id: result.tenant_id,
        bucket_time: result.bucket_time,
        "dimensions.event_type": result.dimensions.event_type,
        "dimensions.environment": result.dimensions.environment
      },
      { $set: result },
      { upsert: true }
    );
  }
}
```

## Redis Data Structures

### Real-Time Counters

```redis
# Event counts per tenant - sliding window (last 5 minutes)
# Key pattern: counter:{tenant_id}:{event_type}:{minute_bucket}
# Example: counter:tenant_acme:user.login:2024011510:30

# Increment counter for current minute
INCR counter:tenant_acme:user.login:2024011510:30
EXPIRE counter:tenant_acme:user.login:2024011510:30 600  # 10 min TTL

# Get counts for last 5 minutes
MGET counter:tenant_acme:user.login:2024011510:30 \
     counter:tenant_acme:user.login:2024011510:29 \
     counter:tenant_acme:user.login:2024011510:28 \
     counter:tenant_acme:user.login:2024011510:27 \
     counter:tenant_acme:user.login:2024011510:26

# Alternative: HyperLogLog for unique counts
PFADD unique:tenant_acme:users:2024011510 user_123 user_456 user_789
PFCOUNT unique:tenant_acme:users:2024011510
```

```javascript
// Node.js implementation
class RealTimeCounters {
  constructor(redis) {
    this.redis = redis;
  }
  
  async incrementEventCount(tenantId, eventType) {
    const now = new Date();
    const minuteBucket = this.getMinuteBucket(now);
    const key = `counter:${tenantId}:${eventType}:${minuteBucket}`;
    
    const pipeline = this.redis.pipeline();
    pipeline.incr(key);
    pipeline.expire(key, 600); // 10 minute TTL
    await pipeline.exec();
  }
  
  async getEventCountsLastNMinutes(tenantId, eventType, minutes = 5) {
    const now = new Date();
    const keys = [];
    
    for (let i = 0; i < minutes; i++) {
      const bucket = this.getMinuteBucket(new Date(now.getTime() - i * 60000));
      keys.push(`counter:${tenantId}:${eventType}:${bucket}`);
    }
    
    const counts = await this.redis.mget(keys);
    return counts.reduce((sum, count) => sum + (parseInt(count) || 0), 0);
  }
  
  getMinuteBucket(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hour = String(date.getUTCHours()).padStart(2, '0');
    const minute = String(date.getUTCMinutes()).padStart(2, '0');
    return `${year}${month}${day}${hour}:${minute}`;
  }
}
```

### Rate Limiting

```redis
# Sliding window rate limiter per tenant
# Limit: 10,000 events per minute per tenant

-- rate_limit.lua
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window_ms = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local request_id = ARGV[4]

-- Remove old entries outside window
redis.call('ZREMRANGEBYSCORE', key, 0, now - window_ms)

-- Count current requests
local count = redis.call('ZCARD', key)

if count >= limit then
    -- Calculate retry-after
    local oldest = redis.call('ZRANGE', key, 0, 0, 'WITHSCORES')
    local retry_after = 0
    if oldest[2] then
        retry_after = math.ceil((tonumber(oldest[2]) + window_ms - now) / 1000)
    end
    return {0, retry_after}  -- Rejected, retry after N seconds
end

-- Add request
redis.call('ZADD', key, now, request_id)
redis.call('PEXPIRE', key, window_ms)

return {1, limit - count - 1}  -- Allowed, remaining capacity
```

```javascript
class TenantRateLimiter {
  constructor(redis) {
    this.redis = redis;
    this.script = `
      local key = KEYS[1]
      local limit = tonumber(ARGV[1])
      local window_ms = tonumber(ARGV[2])
      local now = tonumber(ARGV[3])
      local request_id = ARGV[4]
      
      redis.call('ZREMRANGEBYSCORE', key, 0, now - window_ms)
      local count = redis.call('ZCARD', key)
      
      if count >= limit then
        local oldest = redis.call('ZRANGE', key, 0, 0, 'WITHSCORES')
        local retry_after = 0
        if oldest[2] then
          retry_after = math.ceil((tonumber(oldest[2]) + window_ms - now) / 1000)
        end
        return {0, retry_after}
      end
      
      redis.call('ZADD', key, now, request_id)
      redis.call('PEXPIRE', key, window_ms)
      return {1, limit - count - 1}
    `;
  }
  
  async checkRateLimit(tenantId, limit = 10000, windowMs = 60000) {
    const key = `ratelimit:${tenantId}:events`;
    const now = Date.now();
    const requestId = `${now}-${Math.random().toString(36).substr(2, 9)}`;
    
    const [allowed, remaining] = await this.redis.eval(
      this.script,
      1,
      key,
      limit,
      windowMs,
      now,
      requestId
    );
    
    return {
      allowed: allowed === 1,
      remaining: allowed === 1 ? remaining : 0,
      retryAfter: allowed === 0 ? remaining : 0
    };
  }
}
```

### Recent Events Cache

```redis
# Cache recent events per user for quick timeline access
# Key pattern: timeline:{tenant_id}:{user_id}
# Data structure: Sorted set (score = timestamp)

# Add event to timeline
ZADD timeline:tenant_acme:user_123 1705320645123 "{\"event_id\":\"evt_abc\",\"type\":\"page.view\"}"

# Trim to last 100 events
ZREMRANGEBYRANK timeline:tenant_acme:user_123 0 -101

# Get last 20 events
ZREVRANGE timeline:tenant_acme:user_123 0 19 WITHSCORES

# Set TTL (24 hours)
EXPIRE timeline:tenant_acme:user_123 86400
```

```javascript
class UserTimelineCache {
  constructor(redis) {
    this.redis = redis;
    this.maxEvents = 100;
    this.ttlSeconds = 86400; // 24 hours
  }
  
  async addEvent(tenantId, userId, event) {
    const key = `timeline:${tenantId}:${userId}`;
    const score = event.event_time.getTime();
    const value = JSON.stringify({
      event_id: event.event_id,
      event_type: event.event_type,
      event_time: event.event_time,
      summary: this.summarizeEvent(event)
    });
    
    const pipeline = this.redis.pipeline();
    pipeline.zadd(key, score, value);
    pipeline.zremrangebyrank(key, 0, -(this.maxEvents + 1));
    pipeline.expire(key, this.ttlSeconds);
    await pipeline.exec();
  }
  
  async getRecentEvents(tenantId, userId, count = 20) {
    const key


**User**
continue


**Anthropic.claude Opus 4 5**
```javascript
  = `timeline:${tenantId}:${userId}`;
    const results = await this.redis.zrevrange(key, 0, count - 1, 'WITHSCORES');
    
    const events = [];
    for (let i = 0; i < results.length; i += 2) {
      const event = JSON.parse(results[i]);
      event.timestamp = parseInt(results[i + 1]);
      events.push(event);
    }
    
    return events;
  }
  
  async getEventsSince(tenantId, userId, sinceTimestamp) {
    const key = `timeline:${tenantId}:${userId}`;
    const results = await this.redis.zrangebyscore(
      key,
      sinceTimestamp,
      '+inf',
      'WITHSCORES'
    );
    
    const events = [];
    for (let i = 0; i < results.length; i += 2) {
      const event = JSON.parse(results[i]);
      event.timestamp = parseInt(results[i + 1]);
      events.push(event);
    }
    
    return events;
  }
  
  summarizeEvent(event) {
    // Create a brief summary for timeline display
    return {
      actor: event.actor?.user_id,
      action: event.event_type,
      target: event.payload?.target_id
    };
  }
}
```

### Session Storage

```redis
# User session with sliding TTL
# Key pattern: session:{tenant_id}:{session_id}

HSET session:tenant_acme:sess_abc123 \
  user_id "user_123" \
  email "alice@acme.com" \
  role "admin" \
  permissions "[\"read\",\"write\",\"admin\"]" \
  created_at "2024-01-15T10:00:00Z" \
  last_activity "2024-01-15T10:30:00Z"

EXPIRE session:tenant_acme:sess_abc123 1800  # 30 minutes

# On each request, extend TTL
EXPIRE session:tenant_acme:sess_abc123 1800

# Or use GETEX for atomic get-and-extend (Redis 6.2+)
HGETALL session:tenant_acme:sess_abc123
EXPIRE session:tenant_acme:sess_abc123 1800
```

```javascript
class SessionStore {
  constructor(redis) {
    this.redis = redis;
    this.defaultTTL = 1800; // 30 minutes
  }
  
  async createSession(tenantId, sessionId, userData) {
    const key = `session:${tenantId}:${sessionId}`;
    const sessionData = {
      user_id: userData.userId,
      email: userData.email,
      role: userData.role,
      permissions: JSON.stringify(userData.permissions),
      created_at: new Date().toISOString(),
      last_activity: new Date().toISOString()
    };
    
    await this.redis.hset(key, sessionData);
    await this.redis.expire(key, this.defaultTTL);
    
    return sessionId;
  }
  
  async getSession(tenantId, sessionId, extendTTL = true) {
    const key = `session:${tenantId}:${sessionId}`;
    
    const session = await this.redis.hgetall(key);
    if (!session || Object.keys(session).length === 0) {
      return null;
    }
    
    if (extendTTL) {
      // Sliding window TTL
      await this.redis.expire(key, this.defaultTTL);
      await this.redis.hset(key, 'last_activity', new Date().toISOString());
    }
    
    return {
      userId: session.user_id,
      email: session.email,
      role: session.role,
      permissions: JSON.parse(session.permissions),
      createdAt: new Date(session.created_at),
      lastActivity: new Date(session.last_activity)
    };
  }
  
  async destroySession(tenantId, sessionId) {
    const key = `session:${tenantId}:${sessionId}`;
    await this.redis.del(key);
  }
  
  async updateSessionData(tenantId, sessionId, updates) {
    const key = `session:${tenantId}:${sessionId}`;
    
    const exists = await this.redis.exists(key);
    if (!exists) {
      throw new Error('Session not found');
    }
    
    const updateData = { ...updates, last_activity: new Date().toISOString() };
    if (updates.permissions) {
      updateData.permissions = JSON.stringify(updates.permissions);
    }
    
    await this.redis.hset(key, updateData);
    await this.redis.expire(key, this.defaultTTL);
  }
}
```

## Shard Key Analysis Document

### Candidate Evaluation

```markdown
## Events Collection Shard Key Analysis

### Candidates Evaluated

#### Candidate 1: { event_id: "hashed" }
- **Cardinality:** Excellent (unique per event)
- **Distribution:** Even (hashed)
- **Query Support:** Poor - event_id rarely in queries
- **Verdict:** ❌ REJECTED - Causes scatter-gather on all queries

#### Candidate 2: { tenant_id: 1 }
- **Cardinality:** Moderate (10,000 tenants)
- **Distribution:** Potentially skewed (some tenants much larger)
- **Query Support:** Good - tenant_id in all queries
- **Verdict:** ⚠️ RISKY - Large tenants become hot partitions

#### Candidate 3: { tenant_id: "hashed" }
- **Cardinality:** Moderate (10,000 tenants)
- **Distribution:** Even (hashed)
- **Query Support:** Good for point lookups, poor for ranges
- **Verdict:** ⚠️ CONSIDER - Loses time-range query efficiency

#### Candidate 4: { tenant_id: 1, event_time: 1 }
- **Cardinality:** Excellent (tenant + timestamp)
- **Distribution:** Even across tenants, monotonic within tenant
- **Query Support:** Excellent - matches primary query pattern
- **Verdict:** ✅ SELECTED

### Selected Shard Key: { tenant_id: 1, event_time: 1 }

### Justification

1. **Query Pattern Alignment:**
   - 90% of queries filter by tenant_id + time range
   - Shard key prefix enables targeted queries
   - Time component allows range scans within tenant

2. **Write Distribution:**
   - Writes distributed across tenants (10,000 tenants)
   - Within-tenant writes spread across time
   - No single hot shard for writes

3. **Tenant Isolation:**
   - Each tenant's data co-located (mostly)
   - Efficient tenant-scoped queries
   - Simplified tenant data management

4. **Cardinality Analysis:**
   - tenant_id: 10,000 distinct values
   - Combined with event_time: effectively infinite
   - No chunk size concerns

### Hot Partition Risk Mitigation

**Risk:** Very large tenant (>10% of traffic)

**Mitigation Strategies:**
1. Monitor chunk distribution per tenant
2. Pre-split chunks for known large tenants
3. Consider tenant_id hash prefix for extreme cases:
   ```javascript
   // For tenants with >1% of total traffic
   shard_key = { 
     tenant_shard: `${tenant_id}_${hash(event_id) % 10}`,
     event_time: 1 
   }
   ```

### Migration Plan (If Shard Key Change Required)

1. Create new collection with new shard key
2. Enable change streams on old collection
3. Bulk migrate historical data
4. Apply change stream updates
5. Switch application to new collection
6. Verify data consistency
7. Drop old collection
```

## Capacity Planning Estimate

```markdown
## Capacity Planning: 1 Billion Events/Day

### Storage Calculations

**Per-Event Storage:**
- Average document size: 1 KB
- Index overhead (5 indexes): ~400 bytes/document
- Total per event: ~1.4 KB

**Daily Storage:**
- Events: 1B × 1.4 KB = 1.4 TB/day
- With compression (snappy ~50%): 700 GB/day

**90-Day Retention:**
- Raw: 1.4 TB × 90 = 126 TB
- Compressed: 63 TB total data

**Per-Shard (4 shards):**
- Data: 63 TB / 4 = 15.75 TB per shard
- Per replica (3 replicas): 15.75 TB per node

### Memory Requirements

**Working Set (Hot Data):**
- Last 24 hours: 1.4 TB uncompressed
- Indexes for hot data: ~400 GB
- Target 50% in RAM: ~900 GB cluster-wide
- Per shard: 225 GB
- Per node: 75 GB RAM minimum

**Recommended per MongoDB node:**
- RAM: 128 GB (75 GB working set + 50 GB buffer)
- Storage: 20 TB NVMe SSD
- CPU: 32 cores

### IOPS Calculations

**Write IOPS:**
- Events/second: 1B / 86400 = ~11,500 avg, 100,000 peak
- Write amplification (indexes): 5x
- Peak write IOPS: 500,000 cluster-wide
- Per shard: 125,000 IOPS
- Per node (primary): 125,000 IOPS

**Read IOPS:**
- Estimated read ratio: 5:1 (reads:writes)
- Peak read IOPS: 500,000 cluster-wide
- Distributed across replicas

**Recommended Storage:**
- NVMe SSD with 100,000+ IOPS per node
- Or cloud: io2 Block Express (AWS) or similar

### Redis Sizing

**Real-time Counters:**
- 10,000 tenants × 50 event types × 10 minute windows
- ~5M keys × 100 bytes = 500 MB

**User Timelines:**
- 1M active users × 5 KB (100 events) = 5 GB

**Sessions:**
- 500,000 concurrent sessions × 500 bytes = 250 MB

**Rate Limiting:**
- 10,000 tenants × 1 KB = 10 MB

**Total Redis Memory:**
- Data: ~6 GB
- Overhead (2x): 12 GB
- With replica: 24 GB total

**Recommended Redis Cluster:**
- 3 masters + 3 replicas
- 8 GB RAM per node
- Total: 48 GB cluster capacity

### Network Bandwidth

**Ingestion:**
- 100,000 events/sec × 1 KB = 100 MB/s = 800 Mbps

**Replication (MongoDB):**
- 3 replicas × 100 MB/s = 300 MB/s = 2.4 Gbps

**Client Queries:**
- Estimated 50 MB/s = 400 Mbps

**Recommended:**
- 10 Gbps network per node
- Dedicated replication network if possible

### Infrastructure Summary

| Component | Nodes | Specs per Node |
|-----------|-------|----------------|
| MongoDB Shard | 4 shards × 3 = 12 | 128GB RAM, 32 CPU, 20TB NVMe |
| MongoDB Config | 3 | 16GB RAM, 4 CPU, 100GB SSD |
| MongoDB Router | 4 | 32GB RAM, 8 CPU |
| Redis Cluster | 6 (3M+3R) | 16GB RAM, 8 CPU |
| Ingestion Service | 6 | 16GB RAM, 8 CPU |
| Query Service | 4 | 32GB RAM, 8 CPU |
```

## Sample Queries with Performance Expectations

```javascript
// Query 1: Recent events for tenant dashboard
// Expected: <50ms, targeted to single shard
db.events.find({
  tenant_id: "tenant_acme",
  event_time: { 
    $gte: new Date(Date.now() - 3600000) // Last hour
  }
})
.sort({ event_time: -1 })
.limit(100)
.hint({ tenant_id: 1, event_time: -1 })

// Query 2: User activity timeline
// Expected: <100ms, targeted to single shard
db.events.find({
  tenant_id: "tenant_acme",
  "actor.user_id": "user_12345",
  event_time: { 
    $gte: new Date(Date.now() - 86400000) // Last 24 hours
  }
})
.sort({ event_time: -1 })
.limit(50)

// Query 3: Security investigation (IP address)
// Expected: <500ms, targeted to single shard
db.events.find({
  tenant_id: "tenant_acme",
  "actor.ip_address": "192.168.1.100",
  event_time: {
    $gte: ISODate("2024-01-01"),
    $lt: ISODate("2024-01-16")
  }
})
.sort({ event_time: -1 })

// Query 4: Event count by type (uses aggregates collection)
// Expected: <100ms
db.event_aggregates.aggregate([
  {
    $match: {
      tenant_id: "tenant_acme",
      bucket_type: "hourly",
      bucket_time: {
        $gte: new Date(Date.now() - 86400000)
      }
    }
  },
  {
    $group: {
      _id: "$dimensions.event_type",
      total_count: { $sum: "$metrics.count" },
      unique_users: { $sum: "$metrics.unique_users" }
    }
  },
  { $sort: { total_count: -1 } },
  { $limit: 20 }
])

// Query 5: Audit log retrieval (compliance)
// Expected: <200ms, strong consistency required
db.audit_logs.find({
  tenant_id: "tenant_acme",
  category: "security",
  logged_at: {
    $gte: ISODate("2024-01-01"),
    $lt: ISODate("2024-02-01")
  }
})
.sort({ logged_at: -1 })
.readConcern("majority")
```

## Monitoring and Alerting Specification

```yaml
# Prometheus alerting rules

groups:
  - name: mongodb_alerts
    rules:
      - alert: MongoDBReplicationLag
        expr: mongodb_replset_member_replication_lag_seconds > 10
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "MongoDB replication lag detected"
          description: "Replication lag is {{ $value }}s on {{ $labels.instance }}"
          runbook: "https://wiki.internal/runbooks/mongodb-replication-lag"
      
      - alert: MongoDBReplicationLagCritical
        expr: mongodb_replset_member_replication_lag_seconds > 60
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Critical MongoDB replication lag"
          description: "Replication lag is {{ $value }}s - potential data consistency issues"
      
      - alert: MongoDBHighQueryTime
        expr: rate(mongodb_op_latencies_latency_total{type="query"}[5m]) / rate(mongodb_op_latencies_ops_total{type="query"}[5m]) > 100
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "MongoDB query latency high"
          description: "Average query time is {{ $value }}ms"
      
      - alert: MongoDBConnectionsHigh
        expr: mongodb_connections_current / mongodb_connections_available > 0.8
        for: 5m
        labels:


**User**
continue


**Anthropic.claude Opus 4 5**
```yaml
          severity: warning
        annotations:
          summary: "MongoDB connections approaching limit"
          description: "{{ $value | humanizePercentage }} of connections in use"
          runbook: "https://wiki.internal/runbooks/mongodb-connections"
      
      - alert: MongoDBHotPartition
        expr: max(mongodb_chunks_total) by (shard) / avg(mongodb_chunks_total) by (shard) > 2
        for: 15m
        labels:
          severity: warning
        annotations:
          summary: "Potential hot partition detected"
          description: "Shard {{ $labels.shard }} has disproportionate chunk count"
      
      - alert: MongoDBDiskSpaceWarning
        expr: (mongodb_dbstats_storage_size / mongodb_dbstats_fs_total_size) > 0.75
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "MongoDB disk space warning"
          description: "Disk usage at {{ $value | humanizePercentage }}"

  - name: redis_alerts
    rules:
      - alert: RedisMemoryHigh
        expr: redis_memory_used_bytes / redis_memory_max_bytes > 0.85
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Redis memory usage high"
          description: "Redis memory at {{ $value | humanizePercentage }}"
          runbook: "https://wiki.internal/runbooks/redis-memory"
      
      - alert: RedisMemoryCritical
        expr: redis_memory_used_bytes / redis_memory_max_bytes > 0.95
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Redis memory critical"
          description: "Redis at {{ $value | humanizePercentage }} - evictions imminent"
      
      - alert: RedisReplicationLag
        expr: redis_connected_slave_lag_seconds > 5
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "Redis replication lag detected"
          description: "Replica lag is {{ $value }}s"
      
      - alert: RedisConnectionsHigh
        expr: redis_connected_clients > 8000
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Redis connections high"
          description: "{{ $value }} connected clients"
      
      - alert: RedisCommandLatencyHigh
        expr: rate(redis_commands_duration_seconds_total[5m]) / rate(redis_commands_total[5m]) > 0.01
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Redis command latency high"
          description: "Average command latency is {{ $value | humanizeDuration }}"

  - name: application_alerts
    rules:
      - alert: EventIngestionRateDropped
        expr: rate(events_ingested_total[5m]) < 50000
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Event ingestion rate dropped"
          description: "Ingestion rate is {{ $value }}/s (expected >80000)"
      
      - alert: EventProcessingBacklog
        expr: kafka_consumer_lag_sum > 1000000
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Event processing backlog growing"
          description: "Kafka consumer lag is {{ $value }} messages"
      
      - alert: TenantRateLimitTriggered
        expr: increase(tenant_rate_limit_exceeded_total[5m]) > 100
        for: 1m
        labels:
          severity: info
        annotations:
          summary: "Tenant rate limiting active"
          description: "Tenant {{ $labels.tenant_id }} hitting rate limits"
      
      - alert: QueryLatencyP99High
        expr: histogram_quantile(0.99, rate(query_duration_seconds_bucket[5m])) > 0.5
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "Query latency P99 elevated"
          description: "P99 query latency is {{ $value | humanizeDuration }}"
```

## Key Metrics Dashboard

```javascript
// Grafana dashboard JSON (simplified)
const dashboardConfig = {
  title: "Event Logging Platform",
  panels: [
    // Row 1: Ingestion Metrics
    {
      title: "Events Ingested/sec",
      type: "graph",
      targets: [{ expr: "rate(events_ingested_total[1m])" }]
    },
    {
      title: "Ingestion Latency P99",
      type: "gauge",
      targets: [{ expr: "histogram_quantile(0.99, rate(ingestion_duration_seconds_bucket[5m]))" }]
    },
    {
      title: "Kafka Consumer Lag",
      type: "graph",
      targets: [{ expr: "kafka_consumer_lag_sum" }]
    },
    
    // Row 2: MongoDB Metrics
    {
      title: "MongoDB Operations/sec",
      type: "graph",
      targets: [
        { expr: "rate(mongodb_op_counters_total{type='insert'}[1m])", legend: "Inserts" },
        { expr: "rate(mongodb_op_counters_total{type='query'}[1m])", legend: "Queries" }
      ]
    },
    {
      title: "Replication Lag by Node",
      type: "graph",
      targets: [{ expr: "mongodb_replset_member_replication_lag_seconds" }]
    },
    {
      title: "Chunks per Shard",
      type: "bargauge",
      targets: [{ expr: "mongodb_chunks_total" }]
    },
    
    // Row 3: Redis Metrics
    {
      title: "Redis Memory Usage",
      type: "gauge",
      targets: [{ expr: "redis_memory_used_bytes / redis_memory_max_bytes" }]
    },
    {
      title: "Redis Operations/sec",
      type: "graph",
      targets: [{ expr: "rate(redis_commands_total[1m])" }]
    },
    {
      title: "Redis Hit Rate",
      type: "stat",
      targets: [{ 
        expr: "rate(redis_keyspace_hits_total[5m]) / (rate(redis_keyspace_hits_total[5m]) + rate(redis_keyspace_misses_total[5m]))" 
      }]
    },
    
    // Row 4: Business Metrics
    {
      title: "Events by Tenant (Top 10)",
      type: "bargauge",
      targets: [{ expr: "topk(10, sum by (tenant_id) (rate(events_ingested_total[5m])))" }]
    },
    {
      title: "Events by Type",
      type: "piechart",
      targets: [{ expr: "sum by (event_type) (rate(events_ingested_total[5m]))" }]
    },
    {
      title: "Rate Limit Rejections",
      type: "graph",
      targets: [{ expr: "rate(tenant_rate_limit_exceeded_total[1m])" }]
    }
  ]
};
```

## TTL Policy Document

```markdown
## TTL Policy Specification

### Retention Classes

| Class | Retention | Collection | TTL Index Field |
|-------|-----------|------------|-----------------|
| standard | 90 days | events | expires_at |
| audit | 365 days | audit_logs | expires_at |
| aggregates | 180 days | event_aggregates | bucket_time |
| cache | 24 hours | (Redis) | Per-key TTL |
| sessions | 30 minutes | (Redis) | Sliding TTL |

### Event Classification Rules

```javascript
function classifyEvent(event) {
  // Audit events - extended retention
  const auditEventTypes = [
    'user.permission.changed',
    'user.role.changed',
    'data.exported',
    'data.deleted',
    'admin.settings.changed',
    'security.alert',
    'api_key.created',
    'api_key.revoked'
  ];
  
  if (auditEventTypes.includes(event.event_type)) {
    return {
      retention_class: 'audit',
      expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    };
  }
  
  // Compliance-tagged events
  if (event.metadata?.compliance_required) {
    return {
      retention_class: 'audit',
      expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    };
  }
  
  // Default: standard retention
  return {
    retention_class: 'standard',
    expires_at: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
  };
}
```

### TTL Index Configuration

```javascript
// Standard events TTL (90 days)
db.events.createIndex(
  { expires_at: 1 },
  { 
    expireAfterSeconds: 0,
    partialFilterExpression: { retention_class: "standard" }
  }
);

// Audit events TTL (365 days)
db.events.createIndex(
  { expires_at: 1 },
  { 
    expireAfterSeconds: 0,
    partialFilterExpression: { retention_class: "audit" }
  }
);

// Aggregates TTL (180 days)
db.event_aggregates.createIndex(
  { bucket_time: 1 },
  { expireAfterSeconds: 15552000 }  // 180 days
);
```

### Archive Before Delete

```javascript
// Change stream listener for archival
const archivalPipeline = [
  { 
    $match: { 
      operationType: 'delete',
      'fullDocumentBeforeChange.retention_class': 'audit'
    } 
  }
];

const changeStream = db.events.watch(archivalPipeline, {
  fullDocumentBeforeChange: 'required'
});

changeStream.on('change', async (change) => {
  const doc = change.fullDocumentBeforeChange;
  
  // Archive to S3 before deletion
  await s3.putObject({
    Bucket: 'event-archive',
    Key: `${doc.tenant_id}/${doc.event_time.toISOString().slice(0,7)}/${doc._id}.json`,
    Body: JSON.stringify(doc),
    StorageClass: 'GLACIER_IR'
  }).promise();
  
  console.log(`Archived event ${doc._id} to S3`);
});
```
```

---

# Part XIV: Appendix Materials

## A. MongoDB Quick Reference

### Query Operators

```javascript
// Comparison
$eq    // Equal: { age: { $eq: 25 } }
$ne    // Not equal: { status: { $ne: "inactive" } }
$gt    // Greater than: { price: { $gt: 100 } }
$gte   // Greater than or equal: { quantity: { $gte: 10 } }
$lt    // Less than: { date: { $lt: new Date() } }
$lte   // Less than or equal: { score: { $lte: 50 } }
$in    // In array: { status: { $in: ["active", "pending"] } }
$nin   // Not in array: { category: { $nin: ["archived", "deleted"] } }

// Logical
$and   // { $and: [{ price: { $gt: 10 } }, { price: { $lt: 100 } }] }
$or    // { $or: [{ status: "active" }, { priority: "high" }] }
$not   // { price: { $not: { $gt: 100 } } }
$nor   // { $nor: [{ status: "inactive" }, { archived: true }] }

// Element
$exists  // { email: { $exists: true } }
$type    // { zipcode: { $type: "string" } }

// Array
$all        // { tags: { $all: ["ssl", "security"] } }
$elemMatch  // { items: { $elemMatch: { qty: { $gt: 5 }, price: { $lt: 10 } } } }
$size       // { comments: { $size: 3 } }

// Evaluation
$regex  // { name: { $regex: /^A/, $options: 'i' } }
$expr   // { $expr: { $gt: ["$spent", "$budget"] } }
$mod    // { qty: { $mod: [4, 0] } }  // qty divisible by 4
$text   // { $text: { $search: "coffee shop" } }
$where  // { $where: "this.credits > this.debits" }  // Avoid - slow
```

### Aggregation Stages

```javascript
// Data filtering and shaping
$match      // Filter documents: { $match: { status: "active" } }
$project    // Reshape: { $project: { name: 1, total: { $add: ["$price", "$tax"] } } }
$addFields  // Add fields: { $addFields: { fullName: { $concat: ["$first", " ", "$last"] } } }
$set        // Alias for $addFields
$unset      // Remove fields: { $unset: ["password", "ssn"] }

// Grouping and aggregation
$group    // Group and aggregate: { $group: { _id: "$category", total: { $sum: "$amount" } } }
$bucket   // Group into buckets: { $bucket: { groupBy: "$price", boundaries: [0, 50, 100, 500] } }
$bucketAuto  // Auto-buckets: { $bucketAuto: { groupBy: "$price", buckets: 5 } }

// Array operations
$unwind   // Deconstruct array: { $unwind: "$items" }
$push     // Collect into array (in $group): { $push: "$item" }
$first    // First in group: { $first: "$date" }
$last     // Last in group: { $last: "$date" }

// Joining
$lookup   // Left outer join:
{
  $lookup: {
    from: "products",
    localField: "product_id",
    foreignField: "_id",
    as: "product_details"
  }
}

// Sorting and limiting
$sort     // Sort: { $sort: { created_at: -1, name: 1 } }
$limit    // Limit: { $limit: 10 }
$skip     // Skip: { $skip: 20 }
$sample   // Random sample: { $sample: { size: 5 } }

// Output
$out      // Write to collection: { $out: "results_collection" }
$merge    // Merge into collection: { $merge: { into: "totals", on: "_id" } }

// Counting
$count    // Count documents: { $count: "totalCount" }

// Window functions (MongoDB 5.0+)
$setWindowFields  // Window calculations:
{
  $setWindowFields: {
    partitionBy: "$state",
    sortBy: { date: 1 },
    output: {
      runningTotal: {
        $sum: "$quantity",
        window: { documents: ["unbounded", "current"] }
      }
    }
  }
}
```

### Update Operators

```javascript
// Field updates
$set       // Set field value: { $set: { status: "active" } }
$unset     // Remove field: { $unset: { temp_field: "" } }
$inc       // Increment: { $inc: { views: 1, score: 5 } }
$mul       // Multiply: { $mul: { price: 1.1 } }  // 10% increase
$min       


**User**
continue





**User**
continue from where you stopped


**Anthropic.claude Opus 4 5**
```javascript
$min       // Set to minimum: { $min: { low_score: 50 } }  // Only updates if 50 < current
$max       // Set to maximum: { $max: { high_score: 100 } }
$rename    // Rename field: { $rename: { "nmae": "name" } }
$setOnInsert  // Set only on insert (upsert): { $setOnInsert: { created_at: new Date() } }
$currentDate  // Set to current date: { $currentDate: { updated_at: true } }

// Array updates
$push      // Add to array: { $push: { tags: "new-tag" } }
$push      // With modifiers:
{
  $push: {
    scores: {
      $each: [90, 92, 85],
      $sort: -1,
      $slice: 10  // Keep top 10
    }
  }
}
$addToSet  // Add unique: { $addToSet: { categories: "electronics" } }
$pop       // Remove first/last: { $pop: { items: 1 } }  // 1=last, -1=first
$pull      // Remove matching: { $pull: { tags: "obsolete" } }
$pullAll   // Remove all matching: { $pullAll: { tags: ["a", "b", "c"] } }
$           // Positional (first match): { $set: { "items.$.status": "shipped" } }
$[]        // All positional: { $inc: { "items.$[].qty": 1 } }
$[<id>]    // Filtered positional:
db.orders.updateOne(
  { _id: orderId },
  { $set: { "items.$[elem].status": "shipped" } },
  { arrayFilters: [{ "elem.product_id": productId }] }
)
```

## B. Redis Quick Reference

### Data Structure Commands

```redis
# STRINGS
SET key value [EX seconds] [PX milliseconds] [NX|XX]
GET key
MSET key1 val1 key2 val2
MGET key1 key2
INCR key                    # Increment by 1
INCRBY key amount           # Increment by amount
INCRBYFLOAT key amount      # Increment float
DECR key                    # Decrement by 1
APPEND key value            # Append to string
STRLEN key                  # String length
GETRANGE key start end      # Substring
SETRANGE key offset value   # Overwrite at offset
SETNX key value             # Set if not exists
SETEX key seconds value     # Set with expiration
GETEX key [EX seconds]      # Get and set expiration (6.2+)
GETDEL key                  # Get and delete (6.2+)

# HASHES
HSET key field value [field value ...]
HGET key field
HMGET key field1 field2
HGETALL key
HDEL key field [field ...]
HEXISTS key field
HINCRBY key field amount
HINCRBYFLOAT key field amount
HKEYS key                   # All field names
HVALS key                   # All values
HLEN key                    # Number of fields
HSETNX key field value      # Set if not exists
HSCAN key cursor [MATCH pattern] [COUNT count]

# LISTS
LPUSH key value [value ...]   # Push to left (head)
RPUSH key value [value ...]   # Push to right (tail)
LPOP key [count]              # Pop from left
RPOP key [count]              # Pop from right
LRANGE key start stop         # Get range (0 -1 for all)
LINDEX key index              # Get by index
LLEN key                      # List length
LSET key index value          # Set by index
LINSERT key BEFORE|AFTER pivot value
LTRIM key start stop          # Trim to range
BLPOP key [key ...] timeout   # Blocking pop
BRPOP key [key ...] timeout
LMOVE src dst LEFT|RIGHT LEFT|RIGHT
LPOS key value [RANK rank] [COUNT count]  # Find position (6.0.6+)

# SETS
SADD key member [member ...]
SREM key member [member ...]
SISMEMBER key member          # Check membership
SMEMBERS key                  # All members (careful with large sets)
SCARD key                     # Cardinality (count)
SPOP key [count]              # Remove random
SRANDMEMBER key [count]       # Get random (no remove)
SINTER key [key ...]          # Intersection
SUNION key [key ...]          # Union
SDIFF key [key ...]           # Difference
SINTERSTORE dest key [key ...] # Store intersection
SMOVE source dest member      # Move member
SSCAN key cursor [MATCH pattern] [COUNT count]

# SORTED SETS
ZADD key [NX|XX] [GT|LT] [CH] score member [score member ...]
ZREM key member [member ...]
ZSCORE key member             # Get score
ZRANK key member              # Get rank (0-indexed, low to high)
ZREVRANK key member           # Get rank (high to low)
ZRANGE key start stop [WITHSCORES] [REV]
ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]
ZRANGEBYLEX key min max       # Lexicographic range
ZCARD key                     # Cardinality
ZCOUNT key min max            # Count in score range
ZINCRBY key increment member  # Increment score
ZPOPMIN key [count]           # Pop lowest scores
ZPOPMAX key [count]           # Pop highest scores
BZPOPMIN key [key ...] timeout # Blocking pop
ZINTER numkeys key [key ...] [WEIGHTS weight ...] [AGGREGATE SUM|MIN|MAX]
ZUNION numkeys key [key ...]
ZINTERSTORE dest numkeys key [key ...]
ZSCAN key cursor [MATCH pattern] [COUNT count]

# STREAMS
XADD key [NOMKSTREAM] [MAXLEN|MINID [=|~] threshold] *|id field value [field value ...]
XREAD [COUNT count] [BLOCK milliseconds] STREAMS key [key ...] id [id ...]
XRANGE key start end [COUNT count]   # - for min, + for max
XREVRANGE key end start [COUNT count]
XLEN key
XTRIM key MAXLEN|MINID [=|~] threshold
XDEL key id [id ...]
XINFO STREAM key
XINFO GROUPS key
XINFO CONSUMERS key groupname

# Stream Consumer Groups
XGROUP CREATE key groupname id|$ [MKSTREAM] [ENTRIESREAD entries-read]
XGROUP DESTROY key groupname
XGROUP SETID key groupname id|$
XREADGROUP GROUP groupname consumername [COUNT count] [BLOCK ms] STREAMS key [key ...] id [id ...]
XACK key groupname id [id ...]
XPENDING key groupname [[IDLE min-idle-time] start end count [consumername]]
XCLAIM key groupname consumername min-idle-time id [id ...] [IDLE ms] [TIME unix-time-ms] [RETRYCOUNT count] [FORCE]
XAUTOCLAIM key groupname consumername min-idle-time start [COUNT count]

# HYPERLOGLOG
PFADD key element [element ...]
PFCOUNT key [key ...]
PFMERGE destkey sourcekey [sourcekey ...]

# GEOSPATIAL
GEOADD key [NX|XX] longitude latitude member [longitude latitude member ...]
GEOPOS key member [member ...]
GEODIST key member1 member2 [M|KM|FT|MI]
GEOSEARCH key FROMMEMBER member|FROMLONLAT lon lat BYRADIUS radius M|KM|FT|MI|BYBOX width height M|KM|FT|MI [ASC|DESC] [COUNT count] [WITHCOORD] [WITHDIST] [WITHHASH]
GEOSEARCHSTORE dest src FROMMEMBER member|FROMLONLAT lon lat BYRADIUS radius unit|BYBOX width height unit [ASC|DESC] [COUNT count] [STOREDIST]
```

### Key Management Commands

```redis
# KEY OPERATIONS
DEL key [key ...]             # Delete keys
EXISTS key [key ...]          # Check existence (returns count)
EXPIRE key seconds            # Set TTL in seconds
PEXPIRE key milliseconds      # Set TTL in milliseconds
EXPIREAT key unix-timestamp   # Set expiration time
PEXPIREAT key unix-timestamp-ms
TTL key                       # Get TTL in seconds (-1 = no TTL, -2 = doesn't exist)
PTTL key                      # Get TTL in milliseconds
PERSIST key                   # Remove TTL
RENAME key newkey             # Rename key
RENAMENX key newkey           # Rename if new doesn't exist
TYPE key                      # Get data type
OBJECT ENCODING key           # Get internal encoding
OBJECT FREQ key               # Get access frequency (LFU only)
OBJECT IDLETIME key           # Get idle time
SCAN cursor [MATCH pattern] [COUNT count] [TYPE type]  # Iterate keys
KEYS pattern                  # Find keys (DON'T USE IN PRODUCTION)
RANDOMKEY                     # Get random key
TOUCH key [key ...]           # Update last access time
UNLINK key [key ...]          # Async delete
COPY source destination [DB db] [REPLACE]
DUMP key                      # Serialize key
RESTORE key ttl serialized-value [REPLACE] [ABSTTL] [IDLETIME seconds] [FREQ frequency]
MIGRATE host port key|"" dest-db timeout [COPY] [REPLACE] [AUTH password] [KEYS key ...]
```

## C. CAP/PACELC Cheat Sheet

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                           CAP THEOREM CLASSIFICATIONS                           │
├─────────────────────────┬──────────────────────┬───────────────────────────────┤
│ Classification          │ Databases            │ Behavior During Partition     │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ CP (Consistency +       │ MongoDB              │ Rejects writes/reads if       │
│     Partition Tolerance)│ HBase                │ cannot guarantee consistency  │
│                         │ Redis Cluster        │ Prefers errors over stale     │
│                         │ Zookeeper            │ data                          │
│                         │ etcd                 │                               │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ AP (Availability +      │ Cassandra            │ Continues serving requests    │
│     Partition Tolerance)│ CouchDB              │ May return stale/conflicting  │
│                         │ DynamoDB (default)   │ data                          │
│                         │ Riak                 │ Reconciles after partition    │
│                         │ Voldemort            │ heals                         │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ CA (Consistency +       │ Single-node RDBMS    │ N/A - No partition tolerance  │
│     Availability)       │ (PostgreSQL, MySQL)  │ System fails on partition     │
│                         │                      │ Not truly distributed         │
└─────────────────────────┴──────────────────────┴───────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────┐
│                          PACELC CLASSIFICATIONS                                 │
├─────────────────────────┬──────────────────────┬───────────────────────────────┤
│ Database                │ PACELC               │ Meaning                       │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ MongoDB                 │ PA/EC                │ Partition→Available           │
│                         │                      │ Else→Consistent               │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ Cassandra               │ PA/EL                │ Partition→Available           │
│                         │                      │ Else→Low Latency              │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ DynamoDB                │ PA/EL (default)      │ Partition→Available           │
│ (eventually consistent) │                      │ Else→Low Latency              │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ DynamoDB                │ PC/EC                │ Partition→Consistent          │
│ (strongly consistent)   │                      │ Else→Consistent               │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ CockroachDB             │ PC/EC                │ Partition→Consistent          │
│ Spanner                 │                      │ Else→Consistent               │
├─────────────────────────┼──────────────────────┼───────────────────────────────┤
│ VoltDB                  │ PC/EL                │ Partition→Consistent          │
│                         │                      │ Else→Low Latency              │
└─────────────────────────┴──────────────────────┴───────────────────────────────┘

Legend:
- P = Partition (network failure between nodes)
- A = Availability (system responds to all requests)
- C = Consistency (all nodes see same data)
- E = Else (normal operation, no partition)
- L = Latency (prioritize low latency)
```

## D. Consistency Level Comparison Table

```
┌───────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 CONSISTENCY LEVELS BY DATABASE                                 │
├─────────────────┬─────────────────────┬─────────────────────┬─────────────────────────────────┤
│ Consistency     │ MongoDB             │ Cassandra           │ DynamoDB                        │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────────────────┤
│ Strongest       │ linearizable        │ ALL                 │ Strongly Consistent Read        │
│                 │ (readConcern)       │                     │ (ConsistentRead=true)           │
│                 │ + majority write    │                     │                                 │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────────────────┤
│ Strong          │ majority            │ QUORUM              │ N/A (only two levels)           │
│                 │ (read + write)      │ LOCAL_QUORUM        │                                 │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────────────────┤
│ Bounded         │ N/A                 │ N/A                 │ N/A (Cosmos DB has this)        │
│ Staleness       │                     │                     │                                 │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────────────────┤
│ Session         │ causalConsistency   │ N/A (app layer)     │ N/A (app layer)                 │
│                 │ (session option)    │                     │                                 │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────


**User**
Continue


**Anthropic.claude Opus 4 5**
────────────┤
│ Eventual        │ local               │ ONE                 │ Eventually Consistent Read      │
│                 │ (readConcern)       │ LOCAL_ONE           │ (default)                       │
│                 │ + w:1 write         │ ANY                 │                                 │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────────────────┤
│ Write Levels    │ w: 0 (unack)        │ ANY (weakest)       │ N/A (always durable after       │
│                 │ w: 1 (primary)      │ ONE                 │ successful response)            │
│                 │ w: majority         │ QUORUM              │                                 │
│                 │ w: <number>         │ LOCAL_QUORUM        │                                 │
│                 │ j: true (journal)   │ EACH_QUORUM         │                                 │
│                 │                     │ ALL                 │                                 │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────────────────┤
│ Read from       │ readPreference:     │ Handled by          │ Handled by                      │
│ Replicas        │ - primary           │ consistency level   │ ConsistentRead flag             │
│                 │ - primaryPreferred  │ + LOCAL_ prefix     │                                 │
│                 │ - secondary         │                     │                                 │
│                 │ - secondaryPreferred│                     │                                 │
│                 │ - nearest           │                     │                                 │
└─────────────────┴─────────────────────┴─────────────────────┴─────────────────────────────────┘

FORMULA FOR STRONG CONSISTENCY:
┌─────────────────────────────────────────────────────────────────┐
│ R + W > N  where:                                               │
│   R = Read replicas consulted                                   │
│   W = Write replicas acknowledged                               │
│   N = Total replicas (replication factor)                       │
│                                                                 │
│ Examples (N=3):                                                 │
│   QUORUM read (2) + QUORUM write (2) = 4 > 3 ✓ Strong          │
│   ONE read (1) + ALL write (3) = 4 > 3 ✓ Strong                │
│   ONE read (1) + ONE write (1) = 2 ≤ 3 ✗ Eventual              │
└─────────────────────────────────────────────────────────────────┘
```

## E. Shard Key Selection Worksheet Template

```markdown
# Shard Key Selection Worksheet

## Collection Information
- **Database:** _________________
- **Collection:** _________________
- **Estimated Document Count:** _________________
- **Average Document Size:** _________________
- **Daily Write Volume:** _________________
- **Daily Read Volume:** _________________

## Access Pattern Analysis

| ID | Query Description | Filter Fields | Sort Fields | Frequency | Latency SLA |
|----|-------------------|---------------|-------------|-----------|-------------|
| Q1 |                   |               |             |           |             |
| Q2 |                   |               |             |           |             |
| Q3 |                   |               |             |           |             |
| Q4 |                   |               |             |           |             |
| Q5 |                   |               |             |           |             |

## Candidate Shard Keys

### Candidate 1: _________________

| Criterion | Assessment | Score (1-5) | Notes |
|-----------|------------|-------------|-------|
| Cardinality | High / Medium / Low | | |
| Frequency Distribution | Even / Skewed | | |
| Monotonicity | Yes / No | | |
| Query Isolation Q1 | Targeted / Scatter | | |
| Query Isolation Q2 | Targeted / Scatter | | |
| Query Isolation Q3 | Targeted / Scatter | | |
| Write Distribution | Even / Hot Spot Risk | | |
| **Total Score** | | **/35** | |

### Candidate 2: _________________

| Criterion | Assessment | Score (1-5) | Notes |
|-----------|------------|-------------|-------|
| Cardinality | High / Medium / Low | | |
| Frequency Distribution | Even / Skewed | | |
| Monotonicity | Yes / No | | |
| Query Isolation Q1 | Targeted / Scatter | | |
| Query Isolation Q2 | Targeted / Scatter | | |
| Query Isolation Q3 | Targeted / Scatter | | |
| Write Distribution | Even / Hot Spot Risk | | |
| **Total Score** | | **/35** | |

### Candidate 3: _________________

| Criterion | Assessment | Score (1-5) | Notes |
|-----------|------------|-------------|-------|
| Cardinality | High / Medium / Low | | |
| Frequency Distribution | Even / Skewed | | |
| Monotonicity | Yes / No | | |
| Query Isolation Q1 | Targeted / Scatter | | |
| Query Isolation Q2 | Targeted / Scatter | | |
| Query Isolation Q3 | Targeted / Scatter | | |
| Write Distribution | Even / Hot Spot Risk | | |
| **Total Score** | | **/35** | |

## Scoring Guide

| Score | Cardinality | Distribution | Query Isolation | Write Distribution |
|-------|-------------|--------------|-----------------|-------------------|
| 5 | Millions+ unique | Perfectly even | 100% targeted | Uniform across shards |
| 4 | 100K+ unique | Slightly skewed | 80%+ targeted | Minor imbalance |
| 3 | 10K+ unique | Moderately skewed | 50%+ targeted | Some hot spots |
| 2 | 1K+ unique | Highly skewed | 20%+ targeted | Significant hot spots |
| 1 | <1K unique | Single value dominates | All scatter-gather | Single hot shard |

## Final Selection

**Selected Shard Key:** _________________

**Justification:**
1. ________________________________________________________________
2. ________________________________________________________________
3. ________________________________________________________________

**Accepted Trade-offs:**
1. ________________________________________________________________
2. ________________________________________________________________

**Mitigation Strategies for Trade-offs:**
1. ________________________________________________________________
2. ________________________________________________________________

**Future Migration Considerations:**
________________________________________________________________
________________________________________________________________
```

## F. Common Interview Questions with Model Answers

### Question 1: Explain the CAP theorem and give a real-world example.

**Model Answer:**
"The CAP theorem states that a distributed system can provide at most two of three guarantees: Consistency (all nodes see the same data), Availability (every request gets a response), and Partition Tolerance (the system works despite network failures).

In practice, since network partitions are unavoidable in distributed systems, we're really choosing between consistency and availability when partitions occur.

For example, MongoDB is a CP system. If a network partition isolates the primary from the majority of replicas, writes will fail rather than risk inconsistency. The system sacrifices availability to maintain consistency.

Cassandra, on the other hand, is an AP system. During a partition, all nodes continue accepting writes. You get availability, but different nodes might have different data temporarily. When the partition heals, Cassandra reconciles using last-write-wins or other conflict resolution strategies.

The choice depends on your application: banking transactions need CP (better to reject a transaction than process it twice), while a social media feed can tolerate AP (seeing a slightly stale feed is acceptable)."

---

### Question 2: How would you design a schema for a social media feed in MongoDB?

**Model Answer:**
"I'd approach this by first identifying the access patterns:
1. Get a user's feed (posts from people they follow)
2. Get a user's own posts
3. Add a new post
4. Like/comment on a post

For the posts collection, I'd embed comments (up to a limit) and store like counts with a sample of likers:

```javascript
{
  _id: ObjectId(),
  author_id: 'user_123',
  content: 'Hello world',
  created_at: ISODate(),
  media: [{ type: 'image', url: '...' }],
  
  // Embedded for common display
  likes_count: 1542,
  likes_sample: ['user_456', 'user_789'],  // First few likers
  
  // Embedded comments (subset pattern - only recent)
  comments_count: 89,
  recent_comments: [
    { user_id: 'user_456', text: 'Great post!', created_at: ISODate() }
    // Keep last 3-5 comments embedded
  ]
}
```

For the feed, I'd use a fan-out-on-write pattern for users with moderate follower counts: when a user posts, I push the post ID to each follower's feed collection. For celebrity accounts with millions of followers, I'd use fan-out-on-read to avoid the write amplification.

The feed collection would be simple:
```javascript
{
  user_id: 'user_789',
  post_id: ObjectId('...'),
  author_id: 'user_123',
  created_at: ISODate()
}
```

Indexed on `{ user_id: 1, created_at: -1 }` for efficient feed retrieval with pagination."

---

### Question 3: What is a hot partition and how do you prevent it?

**Model Answer:**
"A hot partition occurs when a disproportionate amount of traffic goes to a single shard or partition, creating a bottleneck while other shards sit idle.

Common causes include:
1. **Monotonically increasing keys** - like timestamps or auto-increment IDs as shard keys, where all new writes go to the latest shard
2. **Low cardinality shard keys** - like country code or status, where one value dominates
3. **Access pattern skew** - like a viral post receiving millions of reads on one shard

**Prevention strategies:**

1. **Choose high-cardinality, non-monotonic shard keys**
   - Combine tenant_id with timestamp rather than timestamp alone
   - Use hashed shard keys if range queries aren't critical

2. **Add synthetic sharding suffix for known hot keys**
   ```javascript
   // Instead of just date as partition key
   partition_key = `${date}_${hash(event_id) % 16}`
   // Spreads one day's data across 16 partitions
   ```

3. **Pre-split for predictable growth**
   - If you know certain tenants will be large, pre-create chunks for them

4. **Monitor and alert**
   - Track operations per shard
   - Alert when imbalance exceeds threshold (e.g., one shard handling >2x average)

**Detection:**
In MongoDB, use `sh.status()` to check chunk distribution and `db.collection.getShardDistribution()` for detailed metrics. In DynamoDB, CloudWatch's `ConsumedReadCapacityUnits` and `ConsumedWriteCapacityUnits` metrics by partition show imbalances."

---

### Question 4: When would you use Redis vs. MongoDB?

**Model Answer:**
"The choice depends on data complexity, durability requirements, and access patterns.

**Choose Redis when:**
- You need sub-millisecond latency
- Data fits in memory or you're okay with eviction
- Access patterns are simple key-value or data structure operations
- You're implementing caching, sessions, rate limiting, real-time leaderboards
- Temporary data where loss is acceptable or recoverable

**Choose MongoDB when:**
- You need rich queries on document contents
- Data is too large for memory
- You need full durability guarantees
- You're storing primary application data
- You need aggregation pipelines for analytics
- Schema flexibility with optional validation is valuable

**Often you use both together:**
- MongoDB as primary store for user profiles
- Redis as cache layer in front of MongoDB
- Redis for session storage with MongoDB backup
- Redis for real-time counters, MongoDB for persistent aggregates

For example, in an e-commerce system:
- Product catalog → MongoDB (complex documents, rich queries)
- Shopping cart → Redis (fast access, TTL for abandoned carts, acceptable to lose if Redis fails—user can re-add items)
- Inventory counts → Both (Redis for real-time decrements, sync to MongoDB for durability)
- User sessions → Redis with MongoDB backup

The key question is: 'What happens if this data is lost?' If the answer is 'rebuild from source' or 'user inconvenience only,' Redis works. If the answer is 'data loss with business impact,' use MongoDB with proper write concerns."

---

### Question 5: Explain eventual consistency and how you design applications to handle it.

**Model Answer:**
"Eventual consistency means that, given no new updates, all replicas will converge to the same value—but there's no guarantee about how quickly. Reads might return stale data temporarily.

**Designing for eventual consistency:**

1. **Identify operations that require strong consistency**
   - Financial transactions, inventory decrements, authentication
   - Use synchronous writes to majority, read from primary

2. **Accept staleness where appropriate**
   - Product listings, social feeds, analytics dashboards
   - Read from replicas, accept data might be seconds old

3. **Implement read-your-writes at the application level**
   ```javascript
   // After write, store operation timestamp
   await db.users.updateOne({ _id: userId }, { $set: updates });
   session.lastWriteTime = Date.now();
   
   // On subsequent reads, check if we need fresh data
   if (Date.now() - session.lastWriteTime < 5000) {
     // Read from primary for 5 seconds after write
     return db.users.findOne({ _id: userId }, { readPreference: 'primary' });
   }
   return db.users.findOne({ _id: userId }, { readPreference: 'secondaryPreferred' });
   ```

4. **Use idempotency for retry safety**
   - Include idempotency keys with requests
   - Check for existing results before processing

5. **Design for conflict resolution**
   - Use CRDTs for counters and sets
   - Use last-write-wins with vector clocks for documents
   - Or design to avoid conflicts (partition by user)

6. **Communicate state clearly to users**
   - 'Your changes are being saved...' instead of instant confirmation
   - Show optimistic updates in UI, confirm asynchronously

The key insight is that eventual consistency is a spectrum, not binary. You choose consistency levels per operation based on business requirements, not globally for the whole application."

---

## G. Glossary of Distributed Systems Terminology

| Term | Definition |
|------|------------|
| **ACID** | Atomicity, Consistency, Isolation, Durability - transaction properties in traditional databases |
| **BASE** | Basically Available, Soft state, Eventually consistent - alternative to ACID for distributed systems |
| **CAP Theorem** | Distributed systems can provide at most 2 of 3: Consistency, Availability, Partition tolerance |
| **Cardinality** | Number of distinct values in a dataset; high cardinality = many unique values |
| **Causal Consistency** | Operations causally related are seen in order by all nodes |
| **Chunk** | In MongoDB sharding, a contiguous range of shard key values; unit of data distribution |
| **Consensus** | Agreement among distributed nodes on a value; algorithms include Raft, Paxos |
| **CRDT** | Conflict-free Replicated Data Type - data structures that converge automatically |
| **Denormalization** | Duplicating data across documents/tables to optimize read performance |
| **Eventual Consistency** | All replicas converge to same value given no new updates; timing not guaranteed |
| **Failover** | Automatic promotion of replica to primary when original primary fails |
| **Fan-out** | Distributing an operation across multiple nodes/users; on-write vs on-read |
| **Hash Sharding** | Distributing data based on hash of shard key; even distribution, no range queries |
| **Hot Partition** | Shard receiving disproportionate traffic; bottleneck in distributed system |
| **Idempotency** | Operation that produces same result regardless of how many times executed |
| **Linearizability** | Strongest consistency; operations appear instantaneous and in real-time order |
| **Monotonic Reads** | Once a value is read, subsequent reads never return older value |
| **Oplog** | MongoDB operation log; used for replication and change streams |
| **


**User**
Continue


**Anthropic.claude Opus 4 5**
Partition** | Network failure isolating groups of nodes; fundamental distributed systems challenge |
| **Partition Key** | Field(s) determining which shard/partition stores a document |
| **Quorum** | Majority of nodes; N/2 + 1 for N nodes |
| **Range Sharding** | Distributing data by key ranges; supports range queries but risks hot spots |
| **Read Concern** | MongoDB setting specifying isolation level for read operations |
| **Read Preference** | MongoDB setting specifying which replica set members to query |
| **Read-Your-Writes** | Session consistency where client always sees their own writes |
| **Replica Set** | MongoDB group of nodes maintaining same data; provides redundancy and availability |
| **Replication Lag** | Delay between write on primary and propagation to replicas |
| **Scatter-Gather** | Query pattern hitting all shards then merging results; expensive |
| **Shard** | Individual partition in a distributed database; subset of total data |
| **Shard Key** | Field(s) determining data distribution across shards |
| **Split-Brain** | Network partition causing multiple nodes to believe they're primary |
| **Strong Consistency** | All reads return most recent write; requires coordination |
| **TTL** | Time-To-Live; automatic expiration of data after specified duration |
| **Tunable Consistency** | Ability to choose consistency level per operation |
| **Vector Clock** | Mechanism tracking causality in distributed systems; detects concurrent updates |
| **Write Amplification** | Ratio of actual writes to logical writes; increased by indexes |
| **Write Concern** | MongoDB setting specifying acknowledgment level for writes |

---

## H. Data Migration Playbook for Shard Key Changes

```markdown
# Shard Key Migration Playbook

## Overview
MongoDB shard keys are immutable once set. Changing a shard key requires migrating 
to a new collection. This playbook provides a safe, zero-downtime migration path.

## Pre-Migration Checklist

- [ ] New shard key validated against all access patterns
- [ ] Capacity available for dual-write period (2x storage temporarily)
- [ ] Change stream consumer infrastructure ready
- [ ] Rollback plan documented
- [ ] Stakeholders notified of migration window
- [ ] Monitoring dashboards configured for both collections
- [ ] Application code ready with feature flags

## Phase 1: Setup (Day -7)

### 1.1 Create New Collection with Target Shard Key

```javascript
// Enable sharding on new collection
sh.shardCollection("mydb.events_v2", { tenant_id: 1, event_time: 1 })

// Create matching indexes
db.events_v2.createIndex({ tenant_id: 1, event_time: -1 })
db.events_v2.createIndex({ tenant_id: 1, "actor.user_id": 1, event_time: -1 })
db.events_v2.createIndex({ tenant_id: 1, event_id: 1 }, { unique: true })
db.events_v2.createIndex({ expires_at: 1 }, { expireAfterSeconds: 0 })

// Pre-split chunks for known large tenants
sh.splitAt("mydb.events_v2", { tenant_id: "large_tenant_001", event_time: MinKey })
sh.splitAt("mydb.events_v2", { tenant_id: "large_tenant_002", event_time: MinKey })
```

### 1.2 Deploy Change Stream Consumer

```javascript
// Change stream to replicate new writes to v2 collection
const pipeline = [
  { $match: { operationType: { $in: ['insert', 'update', 'replace'] } } }
];

const changeStream = db.events.watch(pipeline, {
  fullDocument: 'updateLookup',
  startAtOperationTime: migrationStartTime
});

changeStream.on('change', async (change) => {
  try {
    if (change.operationType === 'insert') {
      await db.events_v2.insertOne(change.fullDocument);
    } else if (change.operationType === 'update' || change.operationType === 'replace') {
      await db.events_v2.replaceOne(
        { _id: change.documentKey._id },
        change.fullDocument,
        { upsert: true }
      );
    }
  } catch (error) {
    if (error.code !== 11000) { // Ignore duplicate key (already migrated)
      throw error;
    }
  }
});
```

## Phase 2: Historical Data Migration (Day -7 to Day -1)

### 2.1 Bulk Migration Script

```javascript
async function migrateHistoricalData() {
  const batchSize = 10000;
  let lastId = null;
  let totalMigrated = 0;
  
  while (true) {
    const query = lastId 
      ? { _id: { $gt: lastId } } 
      : {};
    
    const batch = await db.events.find(query)
      .sort({ _id: 1 })
      .limit(batchSize)
      .toArray();
    
    if (batch.length === 0) break;
    
    // Insert with ordered: false to continue on duplicates
    try {
      await db.events_v2.insertMany(batch, { ordered: false });
    } catch (error) {
      if (error.code !== 11000) {
        console.error('Migration error:', error);
        // Log failed documents for retry
      }
    }
    
    lastId = batch[batch.length - 1]._id;
    totalMigrated += batch.length;
    
    console.log(`Migrated ${totalMigrated} documents...`);
    
    // Throttle to avoid impacting production
    await sleep(100);
  }
  
  console.log(`Historical migration complete: ${totalMigrated} documents`);
}
```

### 2.2 Verify Migration Progress

```javascript
// Compare counts
const sourceCount = await db.events.countDocuments();
const targetCount = await db.events_v2.countDocuments();
console.log(`Source: ${sourceCount}, Target: ${targetCount}, Delta: ${sourceCount - targetCount}`);

// Sample verification
async function verifySample(sampleSize = 1000) {
  const sample = await db.events.aggregate([
    { $sample: { size: sampleSize } }
  ]).toArray();
  
  let mismatches = 0;
  for (const doc of sample) {
    const v2Doc = await db.events_v2.findOne({ _id: doc._id });
    if (!v2Doc || JSON.stringify(doc) !== JSON.stringify(v2Doc)) {
      mismatches++;
      console.log(`Mismatch for _id: ${doc._id}`);
    }
  }
  
  console.log(`Verification: ${mismatches}/${sampleSize} mismatches`);
  return mismatches === 0;
}
```

## Phase 3: Dual-Write Cutover (Day 0)

### 3.1 Enable Dual-Write in Application

```javascript
class EventRepository {
  constructor(db, featureFlags) {
    this.db = db;
    this.flags = featureFlags;
  }
  
  async insertEvent(event) {
    // Always write to v1
    const result = await this.db.events.insertOne(event);
    
    // Dual-write to v2 if enabled
    if (this.flags.isEnabled('dual_write_events_v2')) {
      try {
        await this.db.events_v2.insertOne(event);
      } catch (error) {
        // Log but don't fail - change stream is backup
        console.error('V2 write failed, change stream will catch up:', error);
      }
    }
    
    return result;
  }
  
  async findEvents(query, options) {
    // Read from v2 if enabled, otherwise v1
    const collection = this.flags.isEnabled('read_from_events_v2')
      ? this.db.events_v2
      : this.db.events;
    
    return collection.find(query, options);
  }
}
```

### 3.2 Cutover Steps

```
09:00 - Enable dual-write flag (writes go to both collections)
09:05 - Verify dual-write working (check both collections for new docs)
09:10 - Wait for change stream to catch up any gaps
09:15 - Run verification script
09:20 - Enable read-from-v2 flag for 10% of traffic (canary)
09:30 - Monitor metrics: latency, error rates
10:00 - Increase to 50% read traffic from v2
10:30 - Increase to 100% read traffic from v2
11:00 - Disable change stream (no longer needed)
12:00 - Disable dual-write (writes only to v2)
```

## Phase 4: Cleanup (Day +7)

### 4.1 Final Verification

```javascript
// Ensure no writes to v1 in past 24 hours
const recentV1Writes = await db.events.find({
  _id: { $gt: ObjectId.createFromTime(Date.now()/1000 - 86400) }
}).count();

console.log(`Recent v1 writes: ${recentV1Writes}`);
// Should be 0 after dual-write disabled
```

### 4.2 Rename Collections

```javascript
// Archive v1
db.events.renameCollection("events_archived_20240115");

// Rename v2 to production name
db.events_v2.renameCollection("events");
```

### 4.3 Drop Archived Collection (Day +30)

```javascript
// After confirming no issues for 30 days
db.events_archived_20240115.drop();
```

## Rollback Procedure

If issues detected during cutover:

1. Disable `read_from_events_v2` flag immediately
2. Keep dual-write enabled to maintain sync
3. Investigate issues
4. If unfixable, disable dual-write and continue with v1
5. Schedule new migration attempt after fixes

## Monitoring During Migration

Key metrics to watch:
- [ ] Query latency P50, P95, P99 for both collections
- [ ] Error rates for read and write operations
- [ ] Change stream lag (documents pending replication)
- [ ] Chunk distribution on new collection
- [ ] Storage usage on both collections
```

---

## Conclusion

This guide has covered the fundamental concepts, practical patterns, and operational considerations for building systems with MongoDB and Redis. The key takeaways:

1. **Design for access patterns first** - Unlike relational databases, NoSQL systems require you to know your queries before designing your schema.

2. **Embrace denormalization** - Duplicating data to optimize reads is a feature, not a bug. Accept the trade-off of potentially stale data or more complex updates.

3. **Understand consistency trade-offs** - There's no free lunch. Strong consistency costs latency and availability. Choose appropriate levels per operation.

4. **Shard key selection is critical** - A poor shard key choice can cripple your system. Analyze thoroughly before sharding, as changes are expensive.

5. **Plan for TTL from the start** - Data lifecycle management is easier when built in from day one. Retrofitting TTL to a large collection is painful.

6. **Use Redis appropriately** - Redis excels at specific access patterns (caching, sessions, counters, leaderboards) but isn't a replacement for durable primary storage.

7. **Monitor relentlessly** - Distributed systems fail in subtle ways. Comprehensive monitoring and alerting catches issues before users notice.

8. **Polyglot persistence is powerful but complex** - Using the right database for each workload optimizes performance, but increases operational burden.

The capstone project synthesizes these concepts into a realistic, production-grade design. As you implement it, you'll encounter the same challenges that arise in real distributed systems work—and develop the intuition to navigate them effectively.

Remember: NoSQL doesn't mean "no thinking about data modeling." It means "thinking differently about data modeling"—optimizing for your specific access patterns, accepting calculated trade-offs, and building systems that scale horizontally while maintaining the consistency guarantees your application requires.

---

*Document Version: 1.0*
*Last Updated: January 2024*
*Target Technologies: MongoDB 6.x+, Redis 7.x+*


